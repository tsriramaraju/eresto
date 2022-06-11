import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { createUser, getUsers } from "../../services";
import { google } from "googleapis";
import secrets from "../../config/secrets";
import { OTP } from "../../models";
import { sendSlackNotification } from "../../utils";
import { assignTable } from "../../services/tables/asignTable";

const router = Router();

/**
 *  @desc      Creates Product
 *  @route     POST /api/users/
 *  @access    public
 *  @returns   status
 */
router.post("/", [], async (req: Request, res: Response) => {
  try {
    const { mobile, otp, table, guests } = req.body;
    const identityToolkit = google.identitytoolkit({
      auth: secrets.googleAuth,
      version: "v3",
    });

    const otpData = await OTP.findOne({ mobile });

    await identityToolkit.relyingparty.verifyPhoneNumber({
      // @ts-ignore
      code: otp,
      sessionInfo: otpData?.sessionId,
    });

    let userDoc: any = await getUsers({ mobile });

    if (!userDoc) {
      userDoc = await createUser({ mobile, name: otpData!.name });
    }

    const response = await assignTable({
      customerId: userDoc._id,
      guests,
      mobile,
      name: otpData!.name,
      tableId: table,
    });

    return res.status(202).json(response);
  } catch (error) {
    sendSlackNotification({ text: error.response.data.error.message });
    res.status(500).json({ msg: error.response.data.error.message });
  }
});

export { router as createUserRouter };

//  TODO : add validations later
