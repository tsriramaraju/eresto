import { DatabaseConnectionError } from "../../errors";
import { Category } from "../../models";

export const getCategories = async (id?: string) => {
  try {
    if (id) {
      const categoryDoc = await Category.findById(id);
      return categoryDoc;
    }
    const categoryDoc = await Category.find();
    return categoryDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
