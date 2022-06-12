import { Router, Request, Response } from "express";
import { getOrders } from "../../services/orders/getOrders";

const router = Router();

/**
 *  @desc      Get all Category
 *  @route     Get /api/categories/
 *  @access    public
 *  @returns   status
 */
router.get("/", [], async (req: Request, res: Response) => {
  const response = await getOrders();

  res.status(201).json(response);
});

export { router as getOrdersRouter };

//  TODO : add validations later
