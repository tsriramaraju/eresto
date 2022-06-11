import { BadRequestError, DatabaseConnectionError, ResourceNotFoundError } from "../../errors";
import { TableAttrs } from "../../interfaces";
import { Table } from "../../models";
import { addToWaitList } from "../waitList/addToWaitList";

export const assignTable = async (data: { tableId?: string; guests: number; mobile: number; name: string; customerId: string }) => {
  const { tableId, guests, mobile, name, customerId } = data;
  try {
    const table = tableId ? await Table.findOne({ number: tableId }) : await Table.findOne({ vacantSeats: { $gte: guests } });

    if (tableId && !table) {
      throw new ResourceNotFoundError("Table not found");
    }
    if (!table) {
      const list = await addToWaitList({ customerId, guests, mobile, name });

      return list.queue.length;
    }
    if (table) {
      table.vacantSeats -= guests;
      return await table.save();
    }
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
