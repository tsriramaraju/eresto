import { DatabaseConnectionError } from "../../errors";
import { Category } from "../../models";

export const removeCategory = async (id: string) => {
  try {
    const categoryDoc = await Category.findByIdAndDelete(id);

    return categoryDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
