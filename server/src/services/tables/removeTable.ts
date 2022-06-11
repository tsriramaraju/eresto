import { DatabaseConnectionError } from "../../errors";
import { TableAttrs } from "../../interfaces";
import { Table } from "../../models";

export const removeTable = async (id: string) => {
  try {
    const tableDoc = await Table.findByIdAndDelete(id);
    return tableDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
