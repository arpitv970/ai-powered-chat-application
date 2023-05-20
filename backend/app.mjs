import express from 'express';
import cors from 'cors';
import { chats } from './data/data.js';
import userRouter from './routes/user-routes.mjs';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/user', userRouter);

app.use('/api/chat', (req, res) => {
    res.send(chats);
});

mongoose
    .connect(URI)
    .then(() => {
        app.listen(PORT);
        console.log('\n');
    })
    .then(() => {
        console.log(`Connected to MongoDB Atlas & listening at PORT: ${PORT}`);
    })
    .catch((err) => {
        console.log(err);
    });
