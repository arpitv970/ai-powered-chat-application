import express from 'express';
import { getAllUsers, login, signup } from '../controllers/user-controller';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signup);
userRouter.get('/login', login);

export default userRouter;
