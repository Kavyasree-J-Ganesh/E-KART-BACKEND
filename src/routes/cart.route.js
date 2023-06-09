import express from 'express';
import * as cartController from '../controllers/cart.new.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// get all product of cart
router.get('/', userAuth, cartController.getCart);

router.get('/cart_orders_analysis', userAuth, cartController.cartOrdersAnalysis);

router.get('/top_selled_products', userAuth, cartController.cartProductAnalysis);

// add Products to the cart
router.post('/:_id', userAuth, cartController.addedToCart);

//remove Products from the cart
router.put('/:_id/', userAuth, cartController.removeProductFromCart);

// delete product from cart
router.delete('/:_id', userAuth, cartController.deleteProductFromCart)

// purchase Products from cart
router.post('/purchase/:_id', userAuth, cartController.purchaseById);

export default router;
