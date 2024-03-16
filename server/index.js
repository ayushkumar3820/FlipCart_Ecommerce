import express from "express";
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from "./default.js";
import router from "./router/router.js";
import cors from 'cors';
import bodyParser from "body-parser";

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
