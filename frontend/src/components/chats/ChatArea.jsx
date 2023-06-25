import { Spinner } from '@chakra-ui/react';
import { isLoggedUser } from '../../config/ChatLogic';
import { useSelector } from 'react-redux';

const ChatArea = ({ loadingMessages, messages }) => {
    const userData = useSelector((state) => state.user);
    return (
        <div className='bg-dimBlue rounded-xl h-[70vh] w-[100%] overflow-y-scroll'>
            {loadingMessages ? (
                <div className='w-[100%] h-[100%] flex'>
                    <Spinner
                        d='flex'
                        m='auto'
                        justifyContent='center'
                        alignItems='center'
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </div>
            ) : (
                <div className='border border-black mx-2 my-3 p-2 h-max'>
                    {messages?.map((m) => (
                        <div
                            className={`text-white w-max my-2 px-3 py-2 flex rounded-[8px] ${
                                isLoggedUser(userData, m?.sender)
                                    ? 'mr-2 ml-auto bg-[#0BC5EA]'
                                    : 'mr-auto ml-2 bg-[#319795]'
                            }`}
                            key={m?._id}
                        >
                            {m?.content}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChatArea;
