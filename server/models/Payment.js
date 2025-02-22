const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  paymentMethod: {
    type: String,
    enum: ["Online Pay", "Cash on Delivery"],
    required: true,
  },
  status: { type: String, enum: ["Paid", "Pending"], default: "Pending" },
  transactionId: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Payment", paymentSchema);
