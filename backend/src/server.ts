import dotenv from 'dotenv';
dotenv.config();

import { dbConnect } from './configs/database.config';
dbConnect();

import express from 'express';
import cors from 'cors';
import inputRouter from './routers/inputs.router';

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use("/api",inputRouter);
app.use("/api", inputRouter);


const port =process.env.PORT || 5000;

app.listen(port, () =>{
    console.log("Website serve on http://localhost:" + port);
})