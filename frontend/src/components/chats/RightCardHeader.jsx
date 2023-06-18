import { Avatar, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const RightCardHeader = ({ chat }) => {
    const userData = useSelector((state) => state.user);

    const { isOpen, onOpen, onClose } = useDisclosure();



    console.log('aizen', userData?.user?.name);

    return <div onClick={onOpen} className='text-3xl py-2 my-2 ml-0 mr-auto flex justify-start items-center w-[100%] hover:bg-gray-300 transition-all ease-in-out duration-200 cursor-pointer rounded-xl'>
        <Avatar className='mx-3' name={chat?.users[1]?.name} src={chat?.users[1]?.pic} />
        {chat?.users[1]?.name}
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody className='flex flex-col justify-around items-center mx-auto'>
                    <Heading className='mt-0'>{chat?.users[1]?.name}</Heading>
                    <Image
                        className='m-3'
                        objectFit='cover'
                        borderRadius='full'
                        boxSize='50%'
                        src={chat?.users[1]?.pic}
                        alt='Dan Abramov'
                    />
                    <p className='m-3'>{chat?.users[1]?.email}</p>
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>;
};

export default RightCardHeader;
