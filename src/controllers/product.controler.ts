import { Request, Response } from "express"
import { productModel } from "../models/product.model"

export const addProduct = (req:Request,res:Response)=>{
res.status(200).send(`response form product coontroler`)
    productModel.create(req.body).then(
        (msg:any)=>{
res.status(200)
    })
}

