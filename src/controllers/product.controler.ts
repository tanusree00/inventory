import { Request, Response } from "express"
import { productModel } from "../models/product"


//add
export const addProduct = (req:Request,res:Response)=>{
res.status(200).send(`response form product coontroler`)
    productModel.create(req.body).then(
        (msg:any)=>{
res.status(200)
    })
};

//getall
export const getProducts = async (req: Request, res: Response)=> {
    try {
      const products = await productModel.find();
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  //getone
  export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
      const product = await productModel.findById(req.params.id);
      if (!product) {
        res.status(404).send();
        return;
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  //update
  export const updateProductById = async(req: Request, res: Response) => {
    try {
      const product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!product) {
        res.status(404).send();
        return;
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  //delete
  export const deleteProductById = async (req: Request, res: Response) => {
    try {
      const product = await productModel.findByIdAndDelete(req.params.id);
      if (!product) {
        res.status(404).send();
        return;
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
