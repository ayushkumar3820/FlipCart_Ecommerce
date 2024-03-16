import express from 'express';
//import { userSignUp } from '../contrlloer/user-controller';
const router=express.Router();
router.post('/signup',()=>{
    console.log("from is working in comsole log");
})

export default router;