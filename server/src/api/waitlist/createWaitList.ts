import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { createWaitList } from "../../services";

const router = Router();

/**
 *  @desc      Creates WaitList
 *  @route     POST /api/waitlist/
 *  @access    public
 *  @returns   status
 */
router.post("/", [], async (req: Request, res: Response) => {
  const response = await createWaitList();
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as createWaitListRouter };

//  TODO : add validations later
