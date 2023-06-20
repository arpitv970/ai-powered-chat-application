import { useSelector } from 'react-redux';
import ChatArea from './ChatArea';
import RightCardFooter from './RightCardFooter';
import RightCardHeader from './RightCardHeader';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';

const RightCard = () => {

    const selectedChat = useSelector((state) => state.selectedChats);
    const userData = useSelector((state) => state.user);

    const toast = useToast();

    const fetchChats = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData?.token}`,
            },
        };

        await axios
            .get('http://localhost:5000/api/chat', config)
            .then((res) => console.log('setChat', res))
            .catch((err) =>
                toast({
                    title: 'Ooops... Error Occured!.',
                    position: 'top',
                    description: err,
                    status: 'error',
                    duration: 3000,
                    isClosable: false,
                })
            );
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
                    <ChatArea />
                    <RightCardFooter />
                </>
            )}
        </div>
    );
};

export default RightCard;
