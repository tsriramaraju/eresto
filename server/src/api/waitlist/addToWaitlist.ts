import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { addToWaitList } from "../../services/";

const router = Router();

/**
 *  @desc      Updates Category
 *  @route     PUT /api/categories/:id
 *  @access    public
 *  @returns   status
 */
router.put("/", [], async (req: Request, res: Response) => {
  const data = req.body;

  const response = await addToWaitList(data);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as addWaitlistRouter };

//  TODO : add validations later
