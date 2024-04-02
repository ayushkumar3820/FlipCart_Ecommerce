
import express from  'express';
const router = express.Router();
import {userSignUp,userLogIn}  from '../contrlloer/user-controller.js';
import { getProducts,getProductById } from '../contrlloer/product-controller.js';
import { addPaymentGateway } from '../contrlloer/payment-controller.js';
import { paymentResponse } from '../contrlloer/payment-controller.js';


//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback',paymentResponse)

export default router;
