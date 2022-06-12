import { Router, Request, Response } from "express";
import { getOrders } from "../../services/orders/getOrders";

const router = Router();

/**
 *  @desc      Get all Category
 *  @route     Get /api/categories/
 *  @access    public
 *  @returns   status
 */
router.get("/:id", [], async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await getOrders(id);

  res.status(201).json(response);
});

export { router as getOrderRouter };

//  TODO : add validations later
