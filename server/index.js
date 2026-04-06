import express from 'express';
import "dotenv/config";
import cors from "cors";





import { pool, test } from "./config/sql.js";
import { urlencoded } from "express";

const app = express();
const port = 8080;


app.use(cors({
  origin: "http://localhost:5173"
}));


import router from './routes/routers.js';

app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use("/",router);

test();

app.listen(port,() => {
    console.log(`app is working at this port ${port}`);
})
