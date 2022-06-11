import { Router, Request, Response } from "express";
import { getCategories } from "../../services/";

const router = Router();

/**
 *  @desc      Get specific category
 *  @route     Get /api/categories/:id
 *  @access    public
 *  @returns   status
 */
router.get("/:id", [], async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await getCategories(id);

  res.status(201).json(response);
});

export { router as getCategoryRouter };

//  TODO : add validations later
