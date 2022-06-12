import axios from "axios";
import { APIurl } from "config/keys";
import { CategoryDoc, ProductDoc } from "interfaces";

export const getCategoriesAPI = async (): Promise<CategoryDoc[]> => {
  const res = await axios.get(`${APIurl}/categories`);
  return res.data;
};

export const getProductsAPI = async (): Promise<ProductDoc[]> => {
  const res = await axios.get(`${APIurl}/products`);
  return res.data;
};
