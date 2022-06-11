import { DatabaseConnectionError } from "../../errors";
import { CategoryAttrs } from "../../interfaces";
import { Category } from "../../models";
export const createCategory = async (category: CategoryAttrs) => {
  try {
    const existingCategory = await Category.findOne({
      name: category.name,
    }).lean();

    console.log(existingCategory);
    if (existingCategory) return "Category already exists";

    const categoryDoc = await new Category(category).save();

    return categoryDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
