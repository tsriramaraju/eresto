import { Router, Request, Response } from "express";
import { getProducts } from "../../services";

const router = Router();

/**
 *  @desc      Get specific product
 *  @route     Get /api/products/:id
 *  @access    public
 *  @returns   status
 */
router.get("/:id", [], async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await getProducts(id);

  res.status(201).json(response);
});

export { router as getProductRouter };

//  TODO : add validations later
