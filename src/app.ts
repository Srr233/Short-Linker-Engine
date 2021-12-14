import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import mongo_uri from "./general date/mongo_uri";
import redirectRouter from "./modules/routers/redirectRouter";
import creds from "./general date/creds";

const env_port = process.env.PORT || 3000;

const app = express();

const start = async () => {
    await mongoose.connect(mongo_uri, {
        auth: {
            username: creds.user,
            password: creds.pwd
        }
    });
    app.use(cors());
    app.use(redirectRouter);
    app.listen(env_port, () => {
        console.log('started');
    });
}

start();