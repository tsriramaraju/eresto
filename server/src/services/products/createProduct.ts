import { DatabaseConnectionError } from "../../errors";
import { ProductAttrs } from "../../interfaces";
import { Product } from "../../models";
export const createProduct = async (product: ProductAttrs) => {
  try {
    const existingProduct = await Product.findOne({
      name: product.name,
    }).lean();

    console.log(existingProduct);
    if (existingProduct) return "Product already exists";

    const productDoc = await new Product(product).save();

    return productDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
