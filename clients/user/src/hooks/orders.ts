import { getOrderAPI } from "api/order";
import { useQuery } from "react-query";

export const useOrder = (id: string) => {
  const data = useQuery(["order"], () => getOrderAPI(id), {
    refetchOnWindowFocus: true,
  });

  return data;
};
