import express from 'express';
import {
    delUser,
    editUser,
    getAllUsers,
    login,
    searchUser,
    signup,
} from '../controllers/user-controller.mjs';
import { protect } from '../middleware/authMiddlewar.mjs';

const userRouter = express.Router();

userRouter.get('/', protect, getAllUsers);
userRouter.get('/find', protect, searchUser);
userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.delete('/delUser/:id', protect, delUser);
userRouter.put('/editUser/:id', protect, editUser);

export default userRouter;
