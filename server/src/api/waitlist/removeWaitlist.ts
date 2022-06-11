import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { removeFromWaitList } from "../../services/";

const router = Router();

/**
 *  @desc      Removes Waitlist
 *  @route     Delete /api/waitlist/:id
 *  @access    public
 *  @returns   status
 */
router.delete("/:id", [], async (req: Request, res: Response) => {
  const id = req.params.id;

  const response = await removeFromWaitList(id);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as removeWaitlistRouter };

//  TODO : add validations later
