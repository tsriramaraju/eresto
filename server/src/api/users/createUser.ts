import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { createUser } from "../../services";

const router = Router();

/**
 *  @desc      Creates Product
 *  @route     POST /api/users/
 *  @access    public
 *  @returns   status
 */
router.post("/", [], async (req: Request, res: Response) => {
  const user = req.body;

  const response = await createUser(user);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as createUserRouter };

//  TODO : add validations later
