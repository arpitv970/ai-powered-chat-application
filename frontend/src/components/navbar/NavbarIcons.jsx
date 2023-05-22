import {
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import { IoIosNotifications } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';

const NavbarIcons = () => {
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
                    <MenuItem>My Profile</MenuItem>
                    <MenuItem>Log Out</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
};

export default NavbarIcons;
