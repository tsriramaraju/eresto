import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { createOrder } from "../../services/orders/createOrder";

const router = Router();

/**
 *  @desc      Creates Order
 *  @route     POST /api/categories/
 *  @access    public
 *  @returns   status
 */
router.post("/", [], async (req: Request, res: Response) => {
  const order = req.body;

  const response = await createOrder(order);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as createOrderRouter };

//  TODO : add validations later
