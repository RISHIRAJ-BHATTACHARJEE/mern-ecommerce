const reportSchema = new mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: {
    type: String,
    enum: ["Sales", "Orders", "Payments"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Report", reportSchema);
