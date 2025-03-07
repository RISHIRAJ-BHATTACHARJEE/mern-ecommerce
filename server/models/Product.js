import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

productSchema.index({name: "text", description: "text"})

export default mongoose.model("Product", productSchema);
