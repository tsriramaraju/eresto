import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { updateOrder } from "../../services/orders/updateOrder";

const router = Router();

/**
 *  @desc      Updates Order
 *  @route     PUT /api/categories/:id
 *  @access    public
 *  @returns   status
 */
router.put("/:id", [], async (req: Request, res: Response) => {
  const order = req.body;

  const id = req.params.id;

  const response = await updateOrder(id, order);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as updateOrderRouter };

//  TODO : add validations later
