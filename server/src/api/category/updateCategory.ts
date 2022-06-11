import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { updateCategory } from "../../services/";

const router = Router();

/**
 *  @desc      Updates Category
 *  @route     PUT /api/categories/:id
 *  @access    public
 *  @returns   status
 */
router.put("/:id", [], async (req: Request, res: Response) => {
  const category = req.body;

  const id = req.params.id;

  const response = await updateCategory(id, category);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as updateCategoryRouter };

//  TODO : add validations later
