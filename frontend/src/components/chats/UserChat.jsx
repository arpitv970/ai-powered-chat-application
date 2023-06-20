import { Avatar } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
const UserChat = (props) => {
    const { chat, chatName, chatDes, pic } = props;
    const dispatch = useDispatch();
    return (
        <div
            onClick={() => dispatch(authActions.setSelectedChats(chat))}
            className='border border-primary rounded-xl flex justify-start items-start p-1 my-2 hover:bg-gray-300 transition-all ease-in-out duration-200 cursor-pointer'
        >
            <div className='mx-1 my-1'>
                <Avatar name={chatName} src={pic} />
            </div>
            <div className='mx-1 my-1 w-[100%]'>
                <p className='font-bold'>{chatName}</p>
                <p>{chatDes}</p>
            </div>
        </div>
    );
};

export default UserChat;
