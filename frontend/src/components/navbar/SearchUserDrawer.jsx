import React, { useEffect, useState } from 'react';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    Input,
    Tooltip,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSearchItem from './LoadingSearchItem';
import UserListItems from './UserListItems';
import { authActions } from '../../store';

const SearchUserDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const toast = useToast();

    const userData = useSelector((state) => state.user);
    const selectedChat = useSelector((state) => state.selectedChats);

    const dispatch = useDispatch();

    const [searchUser, setSearchUser] = useState();
    const [searchRes, setSearchRes] = useState();
    const [loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState(false);

    const handleSearchUser = async () => {
        if (!searchUser) {
            toast({
                title: 'No Keyword Enter.',
                position: 'top',
                description: 'Please Enter User Name or Email!',
                status: 'warning',
                duration: 3000,
                isClosable: false,
            });
            return;
        }

        try {
            setLoading(true);

            const config = {
                headers: {
                    Authorization: `Bearer ${userData?.token}`,
                },
            };

            const { data } = await axios.get(
                `http://localhost:5000/api/user/find/?search=${searchUser}`,
                config
            );

            console.log('res', data?.users);

            setLoading(false);
            setSearchRes(data?.users);
        } catch (error) {
            return toast({
                title: 'Error Occured!',
                description: 'Failed to Load the Search Results',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom-left',
            });
        }

        setLoading(false);
    };

    const accessChat = async (userId) => {
        try {
            console.log('user', userId);
            setLoadingChat(true);

            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${userData?.token}`,
                },
            };
            await axios
                .post('http://localhost:5000/api/chat', { userId }, config)
                .then((res) => {
                    console.log(res?.data);
                    dispatch(authActions.setSelectedChats(res?.data));
                })
                .catch((err) =>
                    toast({
                        title: 'Ooops... Error Occured!.',
                        position: 'top',
                        description: err,
                        status: 'error',
                        duration: 3000,
                        isClosable: false,
                    })
                );
            setLoadingChat(false);
            onClose();
        } catch (err) {
            toast({
                title: 'Ooops... Error Occured!.',
                position: 'top',
                description: err,
                status: 'error',
                duration: 3000,
                isClosable: false,
            });
        }
    };

    console.log('selectedChat', selectedChat);

    return (
        <div>
            <Tooltip
                label='Search User to Chat'
                hasArrow
                placement='bottom-start'
            >
                <Button onClick={onOpen}>Search User</Button>
            </Tooltip>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader className='font-poppins'>
                        Search User
                    </DrawerHeader>

                    <DrawerBody>
                        <HStack>
                            <Input
                                onChange={(e) => setSearchUser(e.target.value)}
                                placeholder='Search by Name/Email'
                            />
                            <Button
                                onClick={handleSearchUser}
                                colorScheme='whatsapp'
                            >
                                Search
                            </Button>
                        </HStack>

                        {loading ? (
                            <LoadingSearchItem />
                        ) : (
                            searchRes?.map((user) => (
                                <UserListItems
                                    key={user._id}
                                    user={user}
                                    handleUserList={() => accessChat(user._id)}
                                />
                            ))
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default SearchUserDrawer;
