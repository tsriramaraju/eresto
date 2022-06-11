import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { createProduct } from "../../services/products/createProduct";

const router = Router();

/**
 *  @desc      Creates Product
 *  @route     POST /api/products/
 *  @access    public
 *  @returns   status
 */
router.post("/", [], async (req: Request, res: Response) => {
  const product = req.body;

  const response = await createProduct(product);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as createProductRouter };

//  TODO : add validations later
