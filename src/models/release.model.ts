import mongoose from "mongoose";

const ReleaseSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  employee: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Release', ReleaseSchema);