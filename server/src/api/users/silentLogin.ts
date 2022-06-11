import { Request, Response, Router } from "express";
import { BadRequestError, NotAuthorizedError } from "../../errors";
import { JWTUserPayload } from "../../interfaces";
import { User } from "../../models";
import { generateJWT } from "../../utils";
import { currentUserService } from "../../utils/currentUser";

const router = Router();

/**
 *  @desc      Login with email and password
 *  @route     POST /api/v1/users/email/login
 *  @access    Public
 *  @returns   Jwt payload
 */
router.get("/token", async (req: Request, res: Response) => {
  const user = currentUserService(req);
  if (!user) throw new NotAuthorizedError();

  //find existing user
  const userDoc = await User.findById(user._id);

  //Makes sure user exists
  if (!userDoc) {
    throw new BadRequestError("Employee not found");
  }

  //Return valid JWT token upon successful entry
  const payload: JWTUserPayload = {
    _id: userDoc._id,
    name: userDoc.name,

    mobile: userDoc.mobile,

    cart: userDoc.cart as any,

    orders: userDoc.orders as any,
  };
  return res.status(201).json({ ...payload, token: generateJWT(payload) });
});

export { router as userSilentLoginRouter };
