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
} from '@chakra-ui/react';

const LeftCardHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className='flex justify-between items-center px-3 py-2'>
            <div className='text-2xl'>My Chats</div>
            <div>
                <Button onClick={onOpen}>Create New Group</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create new Group Chat</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl isRequired>
                                <FormLabel>Group Chat Name</FormLabel>
                                <Input placeholder='Enter Group Name' />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Add Users</FormLabel>
                                <Select placeholder='Select Users'>
                                    <option>Pahal</option>
                                    <option>Aryan</option>
                                    <option>Deepesh</option>
                                    <option>Arpit</option>
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
