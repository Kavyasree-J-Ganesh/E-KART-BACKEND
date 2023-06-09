import express from 'express';

import * as productController from '../controllers/product.controller'
import { adminAuth, userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// CRUD Product 
router.post('/', userAuth, productController.createProduct);
router.put('/:id', userAuth, productController.updateProduct);
router.delete('/:id', userAuth, productController.deleteProduct);

// Get product by id for User
router.get('/', productController.getAllProducts);
// Get product for User
router.get('/:_id', productController.getProductsbyID);

// sort product High to Low
router.get('/hightolow', userAuth, productController.sortHighToLow);

// sort product Low to High
router.get('/lowtohigh', userAuth, productController.sortLowToHigh);

// sort product by searching
router.get('/search/:searchText', productController.searchByText);

// sort product by New Arrival
router.get('/newarrival', userAuth, productController.newArrival);



export default router;
