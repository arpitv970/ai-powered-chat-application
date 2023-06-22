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
import { CiCircleRemove } from 'react-icons/ci';
import { useSelector } from 'react-redux';

const LeftCardHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const userData = useSelector((state) => state.user);

    const toast = useToast();

    const [allUsers, setAllUsers] = useState([]);
    const [groupInputs, setGroupInputs] = useState({
        groupName: '',
        users: [],
    });

    const handleGroupInputs = async (e) => {
        e.preventDefault();
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index];
        const option = el.getAttribute('id');

        if (e.target.id === 'groupName') {
            setGroupInputs((prev) => ({ ...prev, groupName: e.target.value }));
        } else {
            const filteredUsers = allUsers?.filter(
                (user) => user?._id !== option
            );

            const selectedUsers = allUsers?.find(
                (user) => user?._id === option
            );

            console.log(selectedUsers, option);

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
                // console.log('all users fetch', filteredUsers);
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

    console.log(groupInputs);

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
                        <ModalBody>
                            <FormControl isRequired>
                                <FormLabel>Group Chat Name</FormLabel>
                                <Input
                                    id='groupName'
                                    onChange={handleGroupInputs}
                                    placeholder='Enter Group Name'
                                />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Add Users</FormLabel>
                                <div className='border border-black flex justify-around items-start flex-wrap'>
                                    {groupInputs?.users?.map((user, idx) => (
                                        <span
                                            className='border border-primary m-1 px-2 rounded-full max-w-max h-[2rem] flex justify-around items-center'
                                            key={idx}
                                        >
                                            {user?.name}
                                            <CiCircleRemove
                                                size='1.5rem'
                                                className='hover:text-red-500 cursor-pointer ml-1 transition-all ease-in-out duration-200'
                                            />
                                        </span>
                                    ))}
                                </div>
                                <Select
                                    id='users'
                                    onChange={handleGroupInputs}
                                    placeholder='Select Users'
                                >
                                    {allUsers?.map((user) => (
                                        <option id={user?._id} key={user?._id}>
                                            {user?.name}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='twitter'>Create</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
};

export default LeftCardHeader;
