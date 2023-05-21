import express from 'express';
import { chats } from '../data/data.mjs';
import { protect } from '../middleware/authMiddlewar.mjs';
import {
    accessAllChats,
    addToGroup,
    createGroupChat,
    fetchAllChats,
    removeFromGroup,
    renameGroupChat,
} from '../controllers/chat-controller.mjs';

const chatRouter = express.Router();

/*
TODO:
- accessAllChats -> post
- fetchAllChats -> get
- createGroupChat -> post
- renameGroupChat -> put
- removeFromGroup -> put
- addToGroup -> put
 */

chatRouter.get('/', protect, fetchAllChats);
chatRouter.post('/', protect, accessAllChats);
chatRouter.post('/group', protect, createGroupChat);
chatRouter.put('/rename-grp', protect, renameGroupChat);
chatRouter.put('/added-grp', protect, addToGroup);
chatRouter.put('/removed-grp', protect, removeFromGroup);

export default chatRouter;
