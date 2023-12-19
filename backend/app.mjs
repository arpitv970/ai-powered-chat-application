import express from 'express';
import cors from 'cors';
import { chats } from './data/data.mjs';
import userRouter from './routes/user-routes.mjs';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import chatRouter from './routes/chat-routes.mjs';
import messageRouter from './routes/message-routes.mjs';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http'

dotenv.config();

const app = express();
app.use(cors());
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/chat', chatRouter);
app.use('/api/message', messageRouter);

// creating HTTP server for our express server
const server = http.createServer(app);

// Creating SocketIO server on our HTTP server
const io = new SocketIOServer(server);

// Handling SocketIO handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // socket-specific events
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
})

mongoose
    .connect(URI)
    .then(() => {
        server.listen(PORT);
        console.log('\n');
    })
    .then(() => {
        console.log(`Connected to MongoDB Atlas & listening at PORT: ${PORT}`);
    })
    .catch((err) => {
        console.log(err);
    });
