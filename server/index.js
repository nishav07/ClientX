import express from 'express';
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import cookieParser from 'cookie-parser';

import { pool, test } from "./config/sql.js";
import { urlencoded } from "express";

const app = express();
const port = 8080;

app.use(cookieParser());
app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));



import router from './routes/routers.js';

app.use(express.json())
app.use(express.urlencoded({extended:true}));

import { limiter } from './middlewares/rateLimit.js';

app.use("/",router);
app.use(limiter);

test();

app.listen(port,() => {
    console.log(`app is working at this port ${port}`);
})
