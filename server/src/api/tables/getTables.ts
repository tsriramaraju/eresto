import { Router, Request, Response } from "express";
import { getTables } from "../../services";

const router = Router();

/**
 *  @desc      Get all Tables
 *  @route     Get /api/table/
 *  @access    public
 *  @returns   status
 */
router.get("/", [], async (req: Request, res: Response) => {
  const response = await getTables();

  res.status(201).json(response);
});

export { router as getTablesRouter };

//  TODO : add validations later
