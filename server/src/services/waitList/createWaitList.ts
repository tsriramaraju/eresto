import { DatabaseConnectionError } from "../../errors";
import { WaitList } from "../../models";

export const createWaitList = async () => {
  try {
    const list = await new WaitList({ queue: [] }).save();

    return list;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
