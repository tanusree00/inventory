import { Request, Response } from "express"
import { productModel } from "../models/product"

export const addProduct = (req:Request,res:Response)=>{
res.status(200).send(`response form product coontroler`)
    productModel.create(req.body).then(
        (msg:any)=>{
res.status(200)
    })
};


export const getProducts = async (req: Request, res: Response)=> {
    try {
      const products = await productModel.find();
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  };
