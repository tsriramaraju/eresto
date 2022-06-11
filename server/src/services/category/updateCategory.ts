import { DatabaseConnectionError } from "../../errors";
import { CategoryAttrs } from "../../interfaces";
import { Category } from "../../models";

export const updateCategory = async (id: string, data: any) => {
  try {
    const categoryDoc = await Category.findByIdAndUpdate(id, { ...data });

    if (!categoryDoc) return "Category doesn't exists";

    return categoryDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
