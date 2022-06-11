import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { isUser } from "../../middlewares/isUser";
import { addCartItem } from "../../services";

const router = Router();

/**
 *  @desc      Creates Product
 *  @route     POST /api/users/cart
 *  @access    public
 *  @returns   status
 */
router.post("/cart", [isUser], async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.currentUser!._id;

  const response = await addCartItem(userId, data);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as addCartRouter };

//  TODO : add validations later
