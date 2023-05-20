import { generateToken } from '../config/generateToken.mjs';
import User from '../models/User.mjs';
import bcryptjs from 'bcryptjs';

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: 'No users found!' });
    }

    return res.status(200).json({ users });
};

export const searchUser = async (req, res, next) => {
    const keyword = req.query.search
        ? {
              $or: [
                  { name: { $regex: req.query.search, $options: 'i' } },
                  { email: { $regex: req.query.search, $options: 'i' } },
              ],
          }
        : {};
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });

    return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
    const { name, email, password, pic } = req.body;
    let existingUser;

    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log;
    }

    if (existingUser) {
        return res.status(400).json({
            message: 'User already exists, try to login!',
        });
    }

    const hashedPass = bcryptjs.hashSync(password);

    const user = new User({
        name,
        email,
        password: hashedPass,
        pic,
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({
        user,
        token: generateToken(user._id),
    });
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }

    if (!existingUser) {
        return res.status(404).json({ message: 'No User found!' });
    }

    return (await bcryptjs.compareSync(password, existingUser.password))
        ? res.status(200).json({
              user: existingUser,
              token: generateToken(existingUser._id),
          })
        : res.status(400).json({
              message: 'Wrong Credentials detected, please enter correct ones',
          });
};

export const delUser = async (req, res, next) => {
    const { email, password } = req.body;
    const userId = req.params.id;

    let user;
    try {
        user = await User.findById(userId);
        if (await bcryptjs.compareSync(password, user.password)) {
            user = await User.findOneAndDelete({ email });
        }
    } catch (err) {
        return console.log(err);
    }

    if (!user) {
        return res.status(500).json({ message: 'Unable to delete User' });
    }

    return res.status(200).json({ message: 'User deleted!!', user });
};

export const editUser = async (req, res, next) => {
    const { name, email, password, newPass } = req.body;
    const userId = req.params.id;
    const newHashedPass = bcryptjs.hashSync(newPass);

    let user;
    try {
        user = await User.findById(userId);
        if (bcryptjs.compareSync(password, user.password)) {
            user = await User.findByIdAndUpdate(userId, {
                name,
                email,
                password: newHashedPass,
            });
        }
    } catch (err) {
        return console.log(err);
    }

    if (!user) {
        return res.status(500).json({ message: 'Unable to update the user' });
    }

    return res.status(200).json({ message: 'Updated User!!', user });
};
