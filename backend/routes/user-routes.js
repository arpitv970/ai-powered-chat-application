import express from 'express';
import {
    delUser,
    editUser,
    getAllUsers,
    login,
    signup,
} from '../controllers/user-controller';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.delete('/delUser/:id', delUser);
userRouter.put('/editUser/:id', editUser);

export default userRouter;
