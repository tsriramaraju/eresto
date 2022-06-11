import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { isUser } from "../../middlewares/isUser";
import { removeCartItem, removeProduct } from "../../services";

const router = Router();

/**
 *  @desc      Removes Product
 *  @route     Delete /api/products/:id
 *  @access    public
 *  @returns   status
 */
router.post("/cart/delete", [isUser], async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.currentUser!._id;

  const response = await removeCartItem(userId, data);
  if (!response) throw new BadRequestError("Product not found");

  res.status(201).json(response);
});

export { router as removeCartRouter };

//  TODO : add validations later
