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

const ProfileModal = ({ user, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody className='flex flex-col justify-around items-center mx-auto'>
                    <Heading className='mt-0'>{user?.name}</Heading>
                    <div className='m-3 w-[30vh] h-[30vh] flex justify-center items-center'>
                        <Avatar
                            objectFit='cover'
                            borderRadius='full'
                            boxShadow='dark-lg'
                            boxSize='100%'
                            name={user?.name}
                            src={user?.pic}
                            alt='Dan Abramov'
                        />
                    </div>
                    <p className='m-3'>{user?.email}</p>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ProfileModal;
