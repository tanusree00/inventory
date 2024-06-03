import express from 'express';
import { Router} from 'express';
import { productModel } from '../models/product.model';
import * as productController from '../controllers/product.controler';

//add product

const product = Router();

product.post('/add',productController.addProduct);