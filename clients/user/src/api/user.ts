import axios from "axios";
import { APIurl } from "config/keys";
import { OtpAttrs, User } from "interfaces";
import setAuthToken from "utils/setAuthToken";
// import setAuthToken from "utils/setAuthToken";

export const sendOtpAPI = async (data: OtpAttrs): Promise<string> => {
  const res = await axios.post(`${APIurl}/users/otp`, data);
  return res.data;
};

export const verifyOtpAPI = async (data: { mobile: number; otp: string; table?: number; guests: number }): Promise<User> => {
  const res = await axios.post(`${APIurl}/users/`, data);
  return res.data;
};

export const silentLoginAPI = async (token: string): Promise<User> => {
  setAuthToken(token);
  const res = await axios.get(`${APIurl}/users/token`);
  return res.data;
};
