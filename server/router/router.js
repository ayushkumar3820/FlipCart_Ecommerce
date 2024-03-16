
import express from  'express';
const router = express.Router();
import {userSignUp}  from '../contrlloer/user-controller.js';


//login & signup
router.post('/signup', userSignUp);


export default router;
