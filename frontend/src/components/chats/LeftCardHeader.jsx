import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectecUsers from './GroupChat/SelectecUsers';
import { authActions } from '../../store';

const LeftCardHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const userData = useSelector((state) => state.user);
    const chats = useSelector((state) => state.chats);

    const toast = useToast();
    const dispatch = useDispatch();

    const [allUsers, setAllUsers] = useState([]);
    const [groupInputs, setGroupInputs] = useState({
        groupName: '',
        users: [userData?.user],
    });

    const handleGroupInputs = async (e) => {
        e.preventDefault();

        if (e.target.id === 'groupName') {
            setGroupInputs((prev) => ({ ...prev, groupName: e.target.value }));
        } else {
            const index = e.target.selectedIndex;
            const el = e.target.childNodes[index];
            const option = el.getAttribute('id');
            const filteredUsers = allUsers?.filter(
                (user) => user?._id !== option
            );

            const selectedUsers = allUsers?.find(
                (user) => user?._id === option
            );

            setGroupInputs({
                ...groupInputs,
                users: [...groupInputs.users, selectedUsers],
            });

            setAllUsers(filteredUsers);
        }
    };

    const fetchAllUsers = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData?.token}`,
            },
        };

        await axios
            .get('http://localhost:5000/api/user', config)
            .then((res) => res?.data?.users)
            .then((data) => {
                const filteredUsers = data?.filter(
                    (user) => user?._id !== userData?.user?._id
                );
                setAllUsers(filteredUsers);
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
    };

    const handleCreateGroup = async (e) => {
        e.preventDefault();
        if (!groupInputs?.groupName || groupInputs?.users?.length < 3) {
            toast({
                title: 'Insuffient Users',
                position: 'top',
                description: 'Add atleast 3 users to create a group chat',
                status: 'error',
                duration: 3000,
                isClosable: false,
            });
            return;
        }
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${userData?.token}`,
                },
            };
            const { data } = await axios.post(
                'http://localhost:5000/api/chat/group',
                {
                    grpName: groupInputs?.groupName,
                    users: JSON.stringify(
                        groupInputs?.users?.map((u) => u?._id)
                    ),
                },
                config
            );

            dispatch(authActions.setChats([data?.fullGrpChat, ...chats]));
            onClose();
            toast({
                title: `${groupInputs?.groupName} group chat created Successfully.`,
                position: 'top',
                description:
                    'You can now freely chat, with your friends in group chat!',
                status: 'success',
                duration: 3000,
                isClosable: false,
            });
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
        <div className='flex justify-between items-center px-3 py-2'>
            <div className='text-2xl'>My Chats</div>
            <div>
                <Button
                    onClick={() => {
                        fetchAllUsers();
                        onOpen();
                    }}
                >
                    Create New Group
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create new Group Chat</ModalHeader>
                        <ModalCloseButton />
                        <form onSubmit={handleCreateGroup}>
                            <ModalBody>
                                <FormControl isRequired>
                                    <FormLabel>Group Chat Name</FormLabel>
                                    <Input
                                        id='groupName'
                                        onChange={handleGroupInputs}
                                        placeholder='Enter Group Name'
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Add Users</FormLabel>
                                    <div className='flex flex-wrap justify-center w-[100%]'>
                                        {groupInputs?.users?.map(
                                            (user, idx) => (
                                                <SelectecUsers
                                                    user={user}
                                                    key={idx}
                                                />
                                            )
                                        )}
                                    </div>
                                    <Select
                                        id='users'
                                        onChange={handleGroupInputs}
                                        placeholder='Select Users'
                                    >
                                        {allUsers?.map((user) => (
                                            <option
                                                id={user?._id}
                                                key={user?._id}
                                            >
                                                {user?.name}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button
                                    type='reset'
                                    mr={3}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setGroupInputs({
                                            groupName: '',
                                            users: [userData?.user],
                                        });
                                        onClose();
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button type='submit' colorScheme='twitter'>
                                    Create
                                </Button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
};

export default LeftCardHeader;
