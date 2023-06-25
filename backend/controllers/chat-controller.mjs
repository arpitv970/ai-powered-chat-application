import Chat from '../models/Chat.mjs';
import User from '../models/User.mjs';

export const accessAllChats = async (req, res, next) => {
    const { userId } = req.body;

    if (!userId) {
        return res
            .status(400)
            .json({ message: 'UserId param not sent with request' });
    }

    let isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: req.userId } } },
        ],
    })
        .populate('users', '-password')
        .populate('latestMessage');

    isChat = await User.populate(isChat, {
        path: 'latestMessage.sender',
        select: 'name pic email',
    });

    console.log('isChat', isChat.length);
    if (isChat.length > 0) {
        return res.status(200).json({ chat: isChat[0] });
    } else {
        let chatData = {
            chatName: 'sender',
            isGroupChat: false,
            users: [req.user._id, userId],
        };

        try {
            const createChat = await Chat.create(chatData);

            const fullChat = await Chat.findOne({
                _id: createChat._id,
            }).populate('users', '-password');
            return res.status(200).json({ fullChat });
        } catch (err) {
            return console.log(err);
        }
    }
};

export const fetchAllChats = async (req, res, next) => {
    try {
        Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate('users', '-password')
            .populate('latestMessage')
            .sort({ updatedAt: -1 })
            .then(async (data) => {
                data = await User.populate(data, {
                    path: 'latestMessage.sender',
                    select: 'name pic email',
                });

                return res.status(200).json({ data });
            })
            .catch((err) => {
                return console.log(err);
            });
    } catch (err) {
        return console.log(err);
    }
};

export const createGroupChat = async (req, res, next) => {
    if (!req.body.users || !req.body.grpName) {
        return res
            .status(400)
            .json({ message: 'Enter complete data to create a Group!' });
    }

    let users = JSON.parse(req.body.users);

    if (users.length < 2) {
        return res
            .status(400)
            .json({ message: 'Need atleast 3 members to create a Group Chat' });
    }
    users.push(req.user);

    try {
        const grpChat = await Chat.create({
            chatName: req.body.grpName,
            users,
            isGroupChat: true,
            groupAdmin: req.user,
        });

        const fullGrpChat = await Chat.findOne({ _id: grpChat._id })
            .populate('users', '-password')
            .populate('groupAdmin', '-password');

        return res.status(201).json({ fullGrpChat });
    } catch (err) {
        return console.log(err);
    }
};

export const renameGroupChat = async (req, res, next) => {
    const { grpId, grpName } = req.body;

    const updatedGrp = await Chat.findByIdAndUpdate(
        grpId,
        { chatName: grpName },
        { new: true }
    )
        .populate('users', '-password')
        .populate('groupAdmin', '-password');

    if (!updatedGrp) {
        return res.status(404).json({ message: 'No Group Chat found!' });
    }

    return res.status(201).json({ updatedGrp });
};

export const addToGroup = async (req, res, next) => {
    const { grpId, userId } = req.body;

    let newMember = await Chat.findByIdAndUpdate(
        grpId,
        { $push: { users: userId } },
        { new: true }
    )
        .populate('users', '-password')
        .populate('groupAdmin', '-password');

    if (!newMember) {
        return res.status(404).json({ message: 'No Chat Found!' });
    }

    return res.status(201).json({ newMember });
};

export const removeFromGroup = async (req, res, next) => {
    const { grpId, userId } = req.body;

    let removeMember = await Chat.findByIdAndUpdate(
        grpId,
        { $pull: { users: userId } },
        { new: true }
    )
        .populate('users', '-password')
        .populate('groupAdmin', '-password');

    if (!removeMember) {
        return res.status(404).json({ message: 'No Chat Found!' });
    }

    return res.status(201).json({ removeMember });
};
