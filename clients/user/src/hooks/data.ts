import { getCategoriesAPI, getProductsAPI } from "api/data";
import { useQuery } from "react-query";

export const useCategories = () => {
  const data = useQuery(["categories"], () => getCategoriesAPI(), {
    refetchOnWindowFocus: true,
  });

  return data;
};
export const useProducts = () => {
  const data = useQuery(["products"], () => getProductsAPI(), {
    refetchOnWindowFocus: true,
  });

  return data;
};
