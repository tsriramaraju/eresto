import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { removeCategory } from "../../services/";

const router = Router();

/**
 *  @desc      Removes Category
 *  @route     Delete /api/categories/:id
 *  @access    public
 *  @returns   status
 */
router.delete("/:id", [], async (req: Request, res: Response) => {
  const id = req.params.id;

  const response = await removeCategory(id);
  if (!response) throw new BadRequestError("Category not found");

  res.status(201).json(response);
});

export { router as removeCategoryRouter };

//  TODO : add validations later
