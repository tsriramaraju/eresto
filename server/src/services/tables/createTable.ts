import { DatabaseConnectionError } from "../../errors";
import { TableAttrs } from "../../interfaces";
import { Table } from "../../models";

export const createTable = async (table: TableAttrs) => {
  try {
    const tableDoc = await new Table(table).save();
    return tableDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
