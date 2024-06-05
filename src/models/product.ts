import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    batchNo: { type: String, required: true, unique: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
}, { timestamps: true });

export const productModel = mongoose.model('Product', ProductSchema);