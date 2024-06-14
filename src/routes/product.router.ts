import express from 'express';
import { Router} from 'express';
import { productModel } from '../models/product';
import * as productController from '../controllers/product.controler';

//add product

 export const product = Router();

product.post('/add',productController.addProduct);

// get all product
product.get('/products', productController.getProducts);

//get one producct
product.get('/products/:id', productController.getProductById);

//update product
product.put('products/:id', productController.updateProductById);

//delete product
product.delete('products/:id', productController.deleteProductById);