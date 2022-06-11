import { Router, Request, Response } from "express";
import { google } from "googleapis";
import secrets from "../../config/secrets";
import { BadRequestError } from "../../errors";
import { getUsers, initiateOTP } from "../../services";
const router = Router();

/**
 *  @desc      Sends OTP  based on parameters
 *  @route     POST /api/v1/otp
 *  @access    Public
 *  @returns   Status
 */
router.post(
  "/otp",

  async (req: Request, res: Response) => {
    const { name, recaptchaToken } = req.body;
    const mobile = +req.body.mobile;

    /**
     * if mobile number and name exists in request then it is for registration
     */
    if (mobile) {
      try {
        // const availability = await getUsers({ mobile });

        //Makes sure mobile no. is available
        // if (name)
        //   if (availability) {
        //     throw new BadRequestError("Mobile no. already exists");
        //   }
        //     register user
        const identityToolkit = google.identitytoolkit({
          auth: secrets.googleAuth,
          version: "v3",
        });

        const response = await identityToolkit.relyingparty.sendVerificationCode({
          // @ts-ignore
          phoneNumber: `+91${mobile}`,
          recaptchaToken,
          // key: secrets.googleCaptchaKey,
        });

        console.log(response);

        //  FIXME : check ts ignore statements
        // @ts-ignore
        if (response.data && response.data.sessionInfo) {
          await initiateOTP({
            id: mobile,
            name,
            // @ts-ignore
            sessionId: response.data.sessionInfo,
          });
          res.status(201).json("OTP has sent to your number");
        } else {
          throw new BadRequestError("Response not generated from google");
        }
      } catch (error) {
        // console.log(error.);
        res.status(500).json({ msg: error.msg });
        console.log(error.response);
      }
    }
  }
);

export { router as sendOTPRouter };

//  TODO : add validation later
