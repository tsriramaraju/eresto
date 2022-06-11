import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { updateProduct } from "../../services";

const router = Router();

/**
 *  @desc      Updates Product
 *  @route     PUT /api/products/:id
 *  @access    public
 *  @returns   status
 */
router.put("/:id", [], async (req: Request, res: Response) => {
  const category = req.body;

  const id = req.params.id;

  const response = await updateProduct(id, category);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as updateProductRouter };

//  TODO : add validations later
