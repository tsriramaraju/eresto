import { Router, Request, Response } from "express";
import { BadRequestError } from "../../errors";
import { updateTable } from "../../services";

const router = Router();

/**
 *  @desc      Updates Table
 *  @route     PUT /api/products/:id
 *  @access    public
 *  @returns   status
 */
router.put("/:id", [], async (req: Request, res: Response) => {
  const data = req.body;

  const id = req.params.id;

  const response = await updateTable(id, data);
  if (typeof response === "string") throw new BadRequestError(response);

  res.status(201).json(response);
});

export { router as updateTableRouter };

//  TODO : add validations later
