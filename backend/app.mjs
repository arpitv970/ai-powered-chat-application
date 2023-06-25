import express from 'express';
import cors from 'cors';
import userRouter from './routes/user-routes.mjs';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatRouter from './routes/chat-routes.mjs';
import messageRouter from './routes/message-routes.mjs';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
app.use(cors());
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/chat', chatRouter);
app.use('/api/message', messageRouter);

let frontendURL =
    'http://localhost:5173' || 'https://ai-powered-chat-application.vercel.app';

const io = new Server(
    mongoose
        .connect(URI)
        .then(() => {
            app.listen(PORT);
            console.log('\n');
        })
        .then(() => {
            console.log(
                `Connected to MongoDB Atlas & listening at PORT: ${PORT}`
            );
        })
        .catch((err) => {
            console.log(err);
        }),
    {
        pingTimeout: 60000,
        cors: {
            origin: frontendURL,
        },
    }
);

io.on('connection', (socket) => {
    console.log('connected to socket.io');
    // socket.on('setup', (userData) => {
    //     socket.join(userData?._id);
    //     socket.emit('Connected');
    // });
});

// mongoose
//     .connect(URI)
//     .then(() => {
//         app.listen(PORT);
//         console.log('\n');
//     })
//     .then(() => {
//         console.log(`Connected to MongoDB Atlas & listening at PORT: ${PORT}`);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
