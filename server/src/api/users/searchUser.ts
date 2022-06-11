import { Router, Request, Response } from "express";
import { getUsers } from "../../services";

const router = Router();

/**
 *  @desc      Get all Products
 *  @route     Get /api/products/
 *  @access    public
 *  @returns   status
 */
router.get("/mobile/:mobile", async (req: Request, res: Response) => {
  const mobile = +req.params.mobile;
  const response = await getUsers({ mobile });

  res.status(201).json(response);
});

export { router as searchUserRouter };

//  TODO : add validations later
