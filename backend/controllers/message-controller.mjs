import Chat from '../models/Chat.mjs';
import Message from '../models/Message.mjs';

export const sendMessage = async (req, res, next) => {
    const { content, chatId } = req.body;

    if (!content || !chatId) {
        return res.status(400).json({ message: 'Provide vaild data' });
    }

    let newMessage = {
        sender: req.user._id,
        content: content,
        chat: chatId,
    };

    try {
        let message = await Message.create(newMessage);

        message = await message.populate('sender', 'name pic email');
        message = await message.populate('chat');

        await Chat.findByIdAndUpdate(req.body.chatId, {
            latestMessage: message,
        });
        return res.status(200).json({ message });
    } catch (err) {
        return console.log(err);
    }
};

export const allMessages = async (req, res, next) => {
    try {
        let messages = await Message.find({ chat: req.params.chatId })
            .populate('sender', 'name pic email')
            .populate('chat');

        return res.status(201).json({ messages });
    } catch (err) {
        return console.log(err);
    }
};
