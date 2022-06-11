import { DatabaseConnectionError } from "../../errors";
import { WaitList } from "../../models";

export const getWaitList = async () => {
  try {
    const list = await WaitList.findOne({}).lean();
    if (!list) {
      return "No wait list";
    } else {
      return list;
    }
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
