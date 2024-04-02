import express from "express";
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from "./default.js";
import router from "./router/router.js";
import cors from 'cors';
import bodyParser from "body-parser";
import { v4 as uuid } from 'uuid';

const app = express();

dotenv.config();

// Allow CORS for all origins, you may adjust it according to your requirements
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is working on port ${PORT}`));

DefaultData();


export let paytmMerchantkey=process.env.PAYTM_MERCHANT_KEY;
export let paytmParams={};
paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'ayushkumarnbd125@gamil.com'
paytmParams['MOBILE_NO'] = '1234567852'