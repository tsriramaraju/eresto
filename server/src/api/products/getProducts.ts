import { Router, Request, Response } from "express";
import { getProducts } from "../../services";

const router = Router();

/**
 *  @desc      Get all Products
 *  @route     Get /api/products/
 *  @access    public
 *  @returns   status
 */
router.get("/", [], async (req: Request, res: Response) => {
  const response = await getProducts();

  res.status(201).json(response);
});

export { router as getProductsRouter };

//  TODO : add validations later
