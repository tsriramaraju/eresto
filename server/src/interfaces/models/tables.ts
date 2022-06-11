import { Document, Model } from "mongoose";

interface TableAttrs {
  number: string;
  seats: number;
}

interface TableModel extends Model<TableDoc> {
  build(attrs: TableAttrs): TableDoc;
}

/**
 * An interface that describes the properties that a Table document has
 */
interface TableDoc extends Document {
  _id: string;
  number: string;
  seats: number;
  orders: string[];
  vacantSeats: number;
}

export { TableDoc, TableAttrs, TableModel };
