import React, { useState } from 'react';
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
    Spinner,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import LoadingSearchItem from './LoadingSearchItem';
import UserListItems from './UserListItems';
import { authActions } from '../../store';
import AxiosHelper from '../../../axios';

const SearchUserDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const toast = useToast();

    const userData = useSelector((state) => state.user);
    const selectedChat = useSelector((state) => state.selectedChats);
    const chats = useSelector((state) => state.chats);

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

            const { data } = await AxiosHelper.get(
                `user/find/?search=${searchUser}`,
                config
            );

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
            setLoadingChat(true);

            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${userData?.token}`,
                },
            };
            const res = await AxiosHelper.post('chat', { userId }, config);

            if (!chats.find((c) => c._id === res?.data?.fullChat._id)) {
                dispatch(authActions.setChats([res?.data?.fullChat, ...chats]));
            }
            dispatch(authActions.setSelectedChats(res?.data?.fullChat));
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
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSearchUser();
                            }}
                        >
                            <HStack>
                                <Input
                                    onChange={(e) =>
                                        setSearchUser(e.target.value)
                                    }
                                    placeholder='Search by Name/Email'
                                />
                                <Button type='submit' colorScheme='whatsapp'>
                                    Search
                                </Button>
                            </HStack>
                        </form>

                        {loadingChat ? (
                            <div className='flex justify-center items-center m-auto h-[100%] w-[100%]'>
                                <Spinner
                                    d='flex'
                                    m='auto'
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                />
                            </div>
                        ) : loading ? (
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
