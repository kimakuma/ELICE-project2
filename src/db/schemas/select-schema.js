import { Schema } from "mongoose";

const SelectSchema = new Schema(
  {
    SELECT_NO: {
      type: Number,
      required: true,
    },
    OPTIONS: {
      type: Object,
      required: true,
    }
  },
  {
    collection: "Select",
    timestamps: true,
  }
);

export { SelectSchema };
