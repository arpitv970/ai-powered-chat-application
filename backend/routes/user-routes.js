import express from 'express';
import {
    delUser,
    editUser,
    getAllUsers,
    login,
    searchUser,
    signup,
} from '../controllers/user-controller';
import { protect } from '../middleware/authMiddlewar';

const userRouter = express.Router();

userRouter.get('/', getAllUsers)
userRouter.get('/find', protect, searchUser);
userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.delete('/delUser/:id', delUser);
userRouter.put('/editUser/:id', editUser);

export default userRouter;
