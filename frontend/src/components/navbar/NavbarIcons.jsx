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
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';
import ProfileModal from '../chats/ProfileModal';

const NavbarIcons = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const userData = useSelector((state) => state.user);
    const user = userData?.user;

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
                    rounded='full'
                    w='60%'
                    justifyContent='flex-start'
                    alignItems='flex-start'
                    size='xl'
                    className='border border-dimWhite flex justify-between items-center'
                    as={Button}
                    rightIcon={<RiArrowDropDownLine />}
                    p='1'
                >
                    <Avatar
                        mr='10'
                        src={user?.pic}
                        size='md'
                        name='Arpit Verma'
                        objectFit='cover'
                        cursor='pointer'
                    />
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={onOpen}>My Profile</MenuItem>
                    <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                </MenuList>
            </Menu>
            <ProfileModal isOpen={isOpen} onClose={onClose} user={user} />
        </div>
    );
};

export default NavbarIcons;
