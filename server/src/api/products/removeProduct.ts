import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { removeProduct } from "../../services";

const router = Router();

/**
 *  @desc      Removes Product
 *  @route     Delete /api/products/:id
 *  @access    public
 *  @returns   status
 */
router.delete("/:id", [], async (req: Request, res: Response) => {
  const id = req.params.id;

  const response = await removeProduct(id);
  if (!response) throw new BadRequestError("Product not found");

  res.status(201).json(response);
});

export { router as removeProductRouter };

//  TODO : add validations later
