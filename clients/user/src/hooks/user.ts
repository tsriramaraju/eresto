import { mobileLoginAPI, mobileSignupAPI, sendOtpAPI, silentLoginAPI } from "api/user";
import { AxiosError } from "axios";
import { OtpAttrs, User } from "interfaces";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useToasts } from "react-toast-notifications";
import { checkStorage, clearStorage, persistStorage } from "utils/localStorage";
import setAuthToken from "utils/setAuthToken";

export const useUser = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToasts();
  let existingUser = queryClient.getQueryData<User>("user");

  // useCart(existingUser?._id);
  // useOrders(existingUser?._id);

  // useFavourites(existingUser?._id);

  const user = useQuery<User, any>(
    "user",
    () => {
      if (existingUser) {
        return existingUser;
      } else if (checkStorage("token")) {
        return silentLoginAPI(checkStorage("token")!);
      } else {
        return Promise.reject(new Error("No token"));
      }
    },
    {
      retry: false,
      enabled: Boolean(checkStorage("token")),

      onSuccess: (data) => {
        // data.addresses && persistStorage("addresses", JSON.stringify(data.addresses));
        // data.defaultAddress && persistStorage("defaultAddress", JSON.stringify(data.defaultAddress));
      },
      onError: (err) => {
        clearStorage("token");
        queryClient.invalidateQueries("user");
        queryClient.removeQueries("user");

        if (err.response?.data.msg)
          addToast(err.response?.data.msg, {
            appearance: "error",
            autoDismiss: true,
          });
        else addToast(err.message, { appearance: "error", autoDismiss: true });
      },
    }
  );

  return user;
};

export const useUserMutation = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToasts();
  const mutation = (msg: string) => {
    return {
      onSuccess: (data: any) => {
        setAuthToken(data.token);
        persistStorage("token", data.token);
        queryClient.setQueryData("user", data);
        addToast(msg, { appearance: "success", autoDismiss: true });
      },
      onError: (err: any) => {
        if (err.response?.status === 418) {
          err.response.data.errors.forEach((error: any) => {
            addToast(error.message, {
              appearance: "error",
              autoDismiss: true,
            });
          });
        } else if (err?.response?.data.msg)
          addToast(err?.response?.data.msg, {
            appearance: "error",
            autoDismiss: true,
          });
        else addToast(err.message, { appearance: "error", autoDismiss: true });
        queryClient.invalidateQueries("user");
        queryClient.removeQueries("user");
      },
    };
  };

  const mobileLogin = useMutation((data: { mobile: number; otp: string }) => mobileLoginAPI(data), mutation("Login Successful"));

  const mobileSignUp = useMutation((data: { mobile: number; otp: string }) => mobileSignupAPI(data), mutation("Signup Successful"));

  const sendOtp = useMutation((data: OtpAttrs) => sendOtpAPI(data), {
    onSuccess: (data) => {
      addToast(data, { appearance: "success", autoDismiss: true });
    },
    onError: (err: any) => {
      if (err?.response?.data.msg)
        addToast(err?.response?.data.msg, {
          appearance: "error",
          autoDismiss: true,
        });
      else addToast(err.message, { appearance: "error", autoDismiss: true });
      queryClient.invalidateQueries("user");
      queryClient.removeQueries("user");
    },
  });

  const logOut = () => {
    localStorage.removeItem("token");
    queryClient.invalidateQueries("user");
    queryClient.removeQueries("user");
  };

  const loading = mobileLogin.isLoading || mobileSignUp.isLoading || sendOtp.isLoading;

  return {
    logOut,

    mobileLogin,
    mobileSignUp,
    sendOtp,
    loading,
  };
};
