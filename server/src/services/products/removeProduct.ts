import { DatabaseConnectionError } from "../../errors";
import { Product } from "../../models";

export const removeProduct = async (id: string) => {
  try {
    const productDoc = await Product.findByIdAndDelete(id);

    return productDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
