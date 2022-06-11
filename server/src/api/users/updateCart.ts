import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { isUser } from "../../middlewares/isUser";
import { updateCartQuantity } from "../../services";

const router = Router();

/**
 *  @desc      Removes Product
 *  @route     Delete /api/products/:id
 *  @access    public
 *  @returns   status
 */
router.put("/cart", [isUser], async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.currentUser!._id;

  const response = await updateCartQuantity(userId, data);
  if (!response) throw new BadRequestError("Product not found");

  res.status(201).json(response);
});

export { router as updateCartRouter };

//  TODO : add validations later
