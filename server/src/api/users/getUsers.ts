import { Router, Request, Response } from "express";
import { getUsers } from "../../services";

const router = Router();

/**
 *  @desc      Get all Products
 *  @route     Get /api/products/
 *  @access    public
 *  @returns   status
 */
router.get("/", [], async (req: Request, res: Response) => {
  const response = await getUsers({});

  res.status(201).json(response);
});

export { router as getUsersRouter };

//  TODO : add validations later
