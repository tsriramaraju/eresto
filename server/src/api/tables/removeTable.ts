import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { removeTable } from "../../services";

const router = Router();

/**
 *  @desc      Removes table
 *  @route     Delete /api/products/:id
 *  @access    public
 *  @returns   status
 */
router.delete("/:id", [], async (req: Request, res: Response) => {
  const id = req.params.id;

  const response = await removeTable(id);
  if (!response) throw new BadRequestError("table not found");

  res.status(201).json(response);
});

export { router as removeTableRouter };

//  TODO : add validations later
