import express from 'express';
import { Router} from 'express';
import { productModel } from '../models/product';
import * as productController from '../controllers/product.controler';

//add product

 export const product = Router();

product.post('/add',productController.addProduct);

// get all product
product.get('/products', productController.getProducts);