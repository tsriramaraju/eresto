import { Router, Request, Response } from "express";
import { getCategories } from "../../services/";

const router = Router();

/**
 *  @desc      Get all Category
 *  @route     Get /api/categories/
 *  @access    public
 *  @returns   status
 */
router.get("/", [], async (req: Request, res: Response) => {
  const response = await getCategories();

  res.status(201).json(response);
});

export { router as getCategoriesRouter };

//  TODO : add validations later
