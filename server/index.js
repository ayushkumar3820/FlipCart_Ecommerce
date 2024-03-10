import express from "express";
import Connection from './database/db.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


Connection(username, password);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is working on port ${PORT}`));
