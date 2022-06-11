import { DatabaseConnectionError } from "../../errors";
import { WaitListAttrs } from "../../interfaces";
import { WaitList } from "../../models";

export const addToWaitList = async (data: WaitListAttrs) => {
  try {
    const list = await WaitList.findOne({});
    if (!list) {
      const ListDoc = await new WaitList({ queue: [data] }).save();
      return ListDoc;
    } else {
      list.queue.push(data);
      const ListDoc = await list.save();
      return ListDoc;
    }
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
