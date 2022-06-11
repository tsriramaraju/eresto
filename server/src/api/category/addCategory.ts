import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { createCategory } from "../../services/category/createCategory";

const router = Router();

/**
 *  @desc      Creates Category
 *  @route     POST /api/categories/
 *  @access    public
 *  @returns   status
 */
router.post("/", [], async (req: Request, res: Response) => {
  const category = req.body;

  const response = await createCategory(category);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as createCategoryRouter };

//  TODO : add validations later
