import { Avatar } from '@chakra-ui/react';
const UserChat = (props) => {
    const { chatName, chatDes, pic = 'https://bit.ly/broken-link' } = props;
    return (
        <div className='border border-primary rounded-xl flex justify-start items-start p-1 my-2 hover:bg-gray-300 transition-all ease-in-out duration-200 cursor-pointer'>
            <div className='mx-1 my-1'>
                <Avatar src={pic} />
            </div>
            <div className='mx-1 my-1 w-[100%]'>
                <p className='font-bold'>{chatName}</p>
                <p>{chatDes}</p>
            </div>
        </div>
    );
};

export default UserChat;
