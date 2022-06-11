import { Router, Request, Response } from "express";
import { getTables } from "../../services";

const router = Router();

/**
 *  @desc      Get specific table
 *  @route     Get /api/tables/:id
 *  @access    public
 *  @returns   status
 */
router.get("/:id", [], async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await getTables(id);

  res.status(201).json(response);
});

export { router as getTableRouter };

//  TODO : add validations later
