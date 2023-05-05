import User from '../models/User';
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

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
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
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};
