import { DatabaseConnectionError } from "../../errors";
import { ProductAttrs } from "../../interfaces";
import { Product } from "../../models";

export const updateProduct = async (id: string, data: any) => {
  try {
    const productDoc = await Product.findByIdAndUpdate(id, { ...data });

    if (!productDoc) return "Product doesn't exists";

    return productDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
