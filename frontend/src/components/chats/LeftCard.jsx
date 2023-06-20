import LeftCardHeader from './LeftCardHeader';
import UserChat from './UserChat';
import { useSelector } from 'react-redux';

const LeftCard = () => {
    const chats = useSelector((state) => state.chats);

    console.log('the chats', chats);
    return (
        <div className='border-[2.5px] border-black rounded-xl h-[100%] w-[25%] mr-1 p-2'>
            <LeftCardHeader />
            {chats?.map((chat, chatId) => (
                <UserChat
                    key={chatId}
                    chat={chat}
                    chatName={chat?.users[1]?.name}
                    pic={chat?.users[1]?.pic}
                    chatDes={'asdf asdf asdf asdf....'}
                />
            ))}
        </div>
    );
};

export default LeftCard;
