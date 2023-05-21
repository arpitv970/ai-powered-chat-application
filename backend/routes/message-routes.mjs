import express from 'express';
import { protect } from '../middleware/authMiddlewar.mjs';
import { allMessages, sendMessage } from '../controllers/message-controller.mjs';

const messageRouter = express.Router();

messageRouter.post('/', protect, sendMessage);
messageRouter.get('/:chatId', allMessages)

export default messageRouter;
