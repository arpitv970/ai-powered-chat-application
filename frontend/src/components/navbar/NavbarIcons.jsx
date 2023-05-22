import {
    Avatar,
    Button,
    Heading,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import { IoIosNotifications } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';

const NavbarIcons = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        dispatch(authActions.logout());
        localStorage.removeItem('userData');
        navigate('/');
    };
    return (
        <div className='flex justify-around items-center p-1 w-[12%]'>
            <IoIosNotifications size='2rem' cursor='pointer' />
            <Menu>
                <MenuButton
                    className='border border-dimWhite w-[60%] flex justify-between items-center'
                    as={Button}
                    rightIcon={<RiArrowDropDownLine />}
                >
                    <Avatar size='sm' name='Arpit Verma' cursor='pointer' />
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={onOpen}>My Profile</MenuItem>
                    <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                </MenuList>
            </Menu>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>My Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className='flex flex-col justify-around items-center mx-auto'>
                        <Heading className='mt-0'>Arpit Verma</Heading>
                        <Image
                            className='m-3'
                            objectFit='cover'
                            borderRadius='full'
                            boxSize='50%'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                        <p className='m-3'>arpitv970@gmail.com</p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default NavbarIcons;
