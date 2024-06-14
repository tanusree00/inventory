import express from 'express';
import { Request, Response } from 'express';
import { productModel } from '../models/product';
import { Relese } from '../models/release';
import release from '../routes/release.router';




export const releaseProducts = async (req: Request, res: Response) => {
  const { productId, quantity, employee } = req.body;
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    let remainingQuantity = quantity;
    let totalPrice = 0;

    // FIFO logic to deduct quantity from batches
    const products = await productModel.find().sort({ _id: 1 });
    for (const p of products) {
      if (p.quantity >= remainingQuantity) {
        p.quantity -= remainingQuantity;
        totalPrice += remainingQuantity * p.unitPrice;
        remainingQuantity = 0;
        await p.save();
        break;
      } else {
        remainingQuantity -= p.quantity;
        totalPrice += p.quantity * p.unitPrice;
        p.quantity = 0;
        await p.save();
      }
    }

    if (remainingQuantity > 0) {
      return res.status(400).json({ error: 'Not enough inventory' });
    }

    const Release:any = new Relese({productId, quantity , unitPrice: product.unitPrice, totalPrice, employee, });

    await Release.save();
    res.status(201).json(Release);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

