import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import mongo_uri from "./general date/mongo_uri";
import redirectRouter from "./modules/routers/redirectRouter";

const env_port = process.env.PORT || 3000;

const app = express();

const start = async () => {
    await mongoose.connect(mongo_uri);
    app.use(cors());
    app.use(redirectRouter);
    app.get('/', (_, res) => res.sendStatus(200));
    app.listen(env_port, () => {
        console.log('started');
    });
}

start();