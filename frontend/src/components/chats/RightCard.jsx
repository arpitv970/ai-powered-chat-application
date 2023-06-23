import { useDispatch, useSelector } from 'react-redux';
import ChatArea from './ChatArea';
import RightCardFooter from './RightCardFooter';
import RightCardHeader from './RightCardHeader';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { authActions } from '../../store';

const RightCard = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState();
    const [loading, setLoading] = useState(false);

    const selectedChat = useSelector((state) => state.selectedChats);
    const userData = useSelector((state) => state.user);
    const chats = useSelector((state) => state.chats);

    const dispatch = useDispatch();
    const toast = useToast();

    const handleSubmitMessage = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userData?.token}`,
                },
            };

            setNewMessage('');

            const { data } = await axios.post(
                'http://localhost:5000/api/message',
                {
                    content: newMessage,
                    chatId: selectedChat?._id,
                },
                config
            );
            console.log(data?.message);
            setMessages([...messages, data?.message]);
        } catch (err) {
            toast({
                title: 'Ooops... Error Occured!.',
                position: 'top',
                description: err,
                status: 'error',
                duration: 3000,
                isClosable: false,
            });
        }
    };

    const fetchChats = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${userData?.token}`,
                },
            };
            const { data } = await axios.get(
                'http://localhost:5000/api/chat',
                config
            );
            console.log('setChat', data);

            // HOTFIX: Need to fix setChats()
            // dispatch(authActions.setChats([data, ...chats]));
        } catch (err) {
            toast({
                title: 'Ooops... Error Occured!.',
                position: 'top',
                description: err,
                status: 'error',
                duration: 3000,
                isClosable: false,
            });
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div className='border-[2.5px] border-black rounded-xl h-[100%] w-[75%] ml-1 flex flex-col justify-between items-start px-3 py-2'>
            {Object.keys(selectedChat)?.length === 0 ? (
                <div>No User Selected</div>
            ) : (
                <>
                    <RightCardHeader chat={selectedChat} />
                    <ChatArea loading={loading} />
                    <RightCardFooter
                        setNewMessage={setNewMessage}
                        newMessage={newMessage}
                        handleSubmitMessage={handleSubmitMessage}
                    />
                </>
            )}
        </div>
    );
};

export default RightCard;
