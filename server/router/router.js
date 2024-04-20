
import express from  'express';
const router = express.Router();
import {userSignUp,userLogIn}  from '../contrlloer/user-controller.js';
import { getProducts,getProductById } from '../contrlloer/product-controller.js';
import { createOrder } from '../contrlloer/payment-controller.js';
import { payOrder } from '../contrlloer/payment-controller.js';
import { paymentResponse } from '../contrlloer/payment-controller.js';



router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);

router.get('/get-razorpay-key', (req, res) => {
    res.send({ key: process.env.RAZORPAY_KEY_ID });
  });
  
router.post("/create-order", createOrder);
router.post('/pay-order', payOrder);
router.get('/pay-res', paymentResponse);

export default router;
