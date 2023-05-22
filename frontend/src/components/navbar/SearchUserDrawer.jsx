import React from 'react';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Input,
    Tooltip,
    useDisclosure,
} from '@chakra-ui/react';

const SearchUserDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <div>
            <Tooltip
                label='Search User to Chat'
                hasArrow
                placement='bottom-start'
            >
                <Button ref={btnRef} onClick={onOpen}>
                    Search User
                </Button>
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
                        <Input placeholder='Search by Name/Email' />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default SearchUserDrawer;
