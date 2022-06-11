import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { createTable } from "../../services";

const router = Router();

/**
 *  @desc      Creates Product
 *  @route     POST /api/tables/
 *  @access    public
 *  @returns   status
 */
router.post("/", [], async (req: Request, res: Response) => {
  const table = req.body;

  const response = await createTable(table);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as createTableRouter };

//  TODO : add validations later
