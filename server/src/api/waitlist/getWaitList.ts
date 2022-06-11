import { Router, Request, Response } from "express";
import { getWaitList } from "../../services/";

const router = Router();

/**
 *  @desc      Get specific waitlist
 *  @route     Get /api/waitlist
 *  @access    public
 *  @returns   status
 */
router.get("/", [], async (req: Request, res: Response) => {
  const response = await getWaitList();

  res.status(201).json(response);
});

export { router as getWaitListRouter };

//  TODO : add validations later
