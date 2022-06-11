import { DatabaseConnectionError } from "../../errors";
import { Table } from "../../models";

export const updateTable = async (id: string, table: any) => {
  try {
    const tableDoc = await Table.findByIdAndUpdate(id, table);
    return tableDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
