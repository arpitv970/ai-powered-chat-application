import {
    Avatar,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';
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
                name={getUser(userData, chat?.users)?.name}
                src={getUser(userData, chat?.users)?.pic}
            />
            {getUser(userData, chat?.users)?.name}

            <ProfileModal
                isOpen={isOpen}
                onClose={onClose}
                user={getUser(userData, chat?.users)}
            />
        </div>
    );
};

export default RightCardHeader;
