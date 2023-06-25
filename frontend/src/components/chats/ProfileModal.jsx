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
} from '@chakra-ui/react';
import { useState } from 'react';

import { FaCrown } from 'react-icons/fa';

const ProfileModal = ({ isGroupChat, user, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody className='flex flex-col justify-around items-center mx-auto'>
                    <Heading className='mt-0'>
                        {!isGroupChat ? user?.name : user?.chatName}
                    </Heading>
                    <div className='m-3 w-[30vh] h-[30vh] flex justify-center items-center'>
                        <Avatar
                            objectFit='cover'
                            borderRadius='full'
                            boxShadow='dark-lg'
                            boxSize='100%'
                            name={!isGroupChat ? user?.name : user?.chatName}
                            src={!isGroupChat ? user?.pic : user?.chatName}
                        />
                    </div>

                    {isGroupChat ? (
                        <div className='flex w-[100%] flex-wrap mx-auto justify-center items-center'>
                            {user?.users?.map((admin) => (
                                <>
                                    {admin?._id === user?.groupAdmin && (
                                        <p
                                            key={admin?._id}
                                            className='border border-primary m-1 px-2 rounded-full max-w-max h-[2rem] flex justify-around items-center transition-all ease-in-out duration-200 hover:text-white hover:bg-gray-700 cursor-pointer'
                                        >
                                            <Avatar
                                                size='xs'
                                                m='2'
                                                name={admin?.name}
                                                src={admin?.pic}
                                            />
                                            {admin?.name}
                                            <FaCrown className='m-1' />
                                        </p>
                                    )}
                                </>
                            ))}
                        </div>
                    ) : (
                        ''
                    )}

                    <div className='flex w-[100%] flex-wrap mx-auto justify-center items-center'>
                        {!isGroupChat ? (
                            <p className='m-3'>{user?.email}</p>
                        ) : (
                            user?.users?.map((u) => (
                                <>
                                    {u?._id !== user?.groupAdmin ? (
                                        <p
                                            key={u?._id}
                                            className='border border-primary m-1 px-2 rounded-full max-w-max h-[2rem] flex justify-around items-center transition-all ease-in-out duration-200 hover:text-white hover:bg-gray-700 cursor-pointer'
                                        >
                                            <Avatar
                                                size='xs'
                                                m='2'
                                                name={u?.name}
                                                src={u?.pic}
                                            />
                                            {u?.name}
                                        </p>
                                    ) : (
                                        ''
                                    )}
                                </>
                            ))
                        )}
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ProfileModal;
