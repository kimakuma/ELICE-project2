import { Schema } from "mongoose";
// import autoIncrement from "mongoose-auto-increment";

const CategorySchema = new Schema(
  {
    CATEGORY_NO: {
      type: Number,
      required: true,
    },
    CATEGORY_NAME: {
      type: String,
      required: true,
    }
  },
  {
    collection: "Category",
    timestamps: true,
  }
);

export { CategorySchema };