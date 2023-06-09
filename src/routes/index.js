import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import productRoute from './product.route';
import cartRoute from './cart.route'
import wishlistRoute from './wishlist.route'
import paymentRoute from './payment.route';
import addressRoute from './address.route'

import caregoryRoute from './categoryRoute'

import orderRoute from './order.route'
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  router.use('/product', productRoute);

  router.use('/cart', cartRoute);

  router.use('/wishlist', wishlistRoute);

  router.use('/category', caregoryRoute);

  router.use('/payment', paymentRoute);

  router.use('/address', addressRoute);

  router.use('/order', orderRoute );

  return router;
};

export default routes;
