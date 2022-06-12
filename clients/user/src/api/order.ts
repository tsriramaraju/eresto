import axios from "axios";
import { APIurl } from "config/keys";
import { OrderDoc, OrderAttrs } from "interfaces";

export const getOrdersAPI = async (): Promise<OrderDoc[]> => {
  const res = await axios.get(`${APIurl}/orders`);
  return res.data;
};

export const getOrderAPI = async (id: string): Promise<OrderDoc> => {
  const res = await axios.get(`${APIurl}/orders/${id}`);
  return res.data;
};

export const createOrderAPI = async (order: OrderAttrs): Promise<OrderDoc> => {
  const res = await axios.post(`${APIurl}/orders`, order);
  return res.data;
};

export const updateOrderAPI = async (id: string, order: OrderAttrs): Promise<OrderDoc> => {
  const res = await axios.put(`${APIurl}/orders/${id}`, order);
  return res.data;
};
