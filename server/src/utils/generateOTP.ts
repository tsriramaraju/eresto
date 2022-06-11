/**
 * creates a 4 digit OTP
 */
export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 800000);
};
