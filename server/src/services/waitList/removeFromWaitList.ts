import { DatabaseConnectionError } from "../../errors";
import { WaitList } from "../../models";

export const removeFromWaitList = async (id: string) => {
  try {
    const list = await WaitList.findOne({});
    if (!list) {
      return "No waitlist";
    } else {
      const index = list.queue.findIndex((item) => item.customerId.toString() === id);
      if (index === -1) {
        return "Customer not in wait list";
      } else {
        list.queue.splice(index, 1);
        const ListDoc = await list.save();
        return ListDoc;
      }
    }
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
