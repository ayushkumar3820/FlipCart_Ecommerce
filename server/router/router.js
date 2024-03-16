
import express from  'express';
const router = express.Router();
import {userSignUp,userLogIn}  from '../contrlloer/user-controller.js';


//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);


export default router;
