
import express from  'express';
const router = express.Router();
import {userSignUp,userLogIn}  from '../contrlloer/user-controller.js';
import { getProducts,getProductsById } from '../contrlloer/product-controller.js';


//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products',getProducts);
router.get('/product/:id',getProductsById);

export default router;
