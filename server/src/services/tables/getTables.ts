import { DatabaseConnectionError } from "../../errors";
import { TableAttrs } from "../../interfaces";
import { Table } from "../../models";

export const getTables = async (id?: string) => {
  try {
    if (id) {
      const tableDoc = await Table.findById(id);
      return tableDoc;
    }
    const tableDoc = await Table.find();
    return tableDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
