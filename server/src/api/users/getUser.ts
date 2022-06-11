import { Router, Request, Response } from "express";
import { isUser } from "../../middlewares/isUser";
import { getUsers } from "../../services";

const router = Router();

/**
 *  @desc      Get all Products
 *  @route     Get /api/products/
 *  @access    public
 *  @returns   status
 */
router.get("/:id", [isUser], async (req: Request, res: Response) => {
  const id = req.currentUser!._id;
  const response = await getUsers(id);

  res.status(201).json(response);
});

export { router as getUserRouter };

//  TODO : add validations later
