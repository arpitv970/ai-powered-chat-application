import { useEffect, useState } from 'react';
import { getUser } from '../../config/ChatLogic';
import LeftCardHeader from './LeftCardHeader';
import UserChat from './UserChat';
import { useDispatch, useSelector } from 'react-redux';
import AxiosHelper from '../../../axios';
import { useToast } from '@chakra-ui/react';
import { authActions } from '../../store';

const LeftCard = () => {
    const [loading, setLoading] = useState(false);

    const chats = useSelector((state) => state.chats);
    const userData = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const toast = useToast();

    const fetchChats = async () => {
        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${userData?.token}`,
                },
            };
            const res = await AxiosHelper.get('chat', config);
            setLoading(false);
            // console.log('setChat', res?.data?.data);

            // HOTFIX: Need to fix setChats()
            dispatch(authActions.setChats(res?.data?.data));
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
        <div className='border-[2.5px] border-black rounded-xl h-[100%] w-[25%] mr-1 p-2 overflow-y-auto'>
            <LeftCardHeader />
            {chats?.map((chat, chatId) => (
                <UserChat
                    key={chatId}
                    chat={chat}
                    chatName={
                        !chat?.isGroupChat
                            ? getUser(userData, chat?.users)?.name
                            : chat?.chatName
                    }
                    pic={
                        !chat?.isGroupChat
                            ? getUser(userData, chat?.users)?.pic
                            : chat?.chatName
                    }
                    chatDes={'asdf asdf asdf asdf....'}
                />
            ))}
        </div>
    );
};

export default LeftCard;
