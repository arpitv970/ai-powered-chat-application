import { Avatar, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';
import { getUser } from '../../config/ChatLogic';

const RightCardHeader = ({ chat }) => {
    const userData = useSelector((state) => state.user);

    const { isOpen, onOpen, onClose } = useDisclosure();

    console.log('aizen', userData?.user?.name);

    return (
        <div
            onClick={onOpen}
            className='text-3xl py-2 my-1 ml-0 mr-auto flex justify-start items-center w-[100%] hover:bg-gray-300 transition-all ease-in-out duration-200 cursor-pointer rounded-xl'
        >
            <Avatar
                className='mx-3'
                name={
                    !chat?.isGroupChat
                        ? getUser(userData, chat?.users)?.name
                        : chat?.chatName
                }
                src={
                    !chat?.isGroupChat
                        ? getUser(userData, chat?.users)?.pic
                        : chat?.chatName
                }
            />
            {!chat?.isGroupChat
                ? getUser(userData, chat?.users)?.name
                : chat?.chatName}

            <ProfileModal
                isOpen={isOpen}
                onClose={onClose}
                isGroupChat={chat?.isGroupChat}
                user={
                    !chat?.isGroupChat ? getUser(userData, chat?.users) : chat
                }
            />
        </div>
    );
};

export default RightCardHeader;
