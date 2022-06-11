import axios from "axios";
import { APIurl } from "config/keys";
import { OtpAttrs, User } from "interfaces";
import setAuthToken from "utils/setAuthToken";

export const silentLoginAPI = async (token: string): Promise<User> => {
  setAuthToken(token);
  const res = await axios.get(`${APIurl}/users/login/token`);
  return res.data;
};

export const mobileSignupAPI = async (data: { mobile: number; otp: string }): Promise<User> => {
  const res = await axios.post(`${APIurl}/users/mobile/register`, data);
  return res.data;
};

export const sendOtpAPI = async (data: OtpAttrs): Promise<string> => {
  console.log("what the fuck");
  const res = await axios.post(`${APIurl}/otp`, data);
  return res.data;
};

export const mobileLoginAPI = async (data: { mobile: number; otp: string }): Promise<User> => {
  const res = await axios.post(`${APIurl}/users/mobile/login`, data);
  return res.data;
};
