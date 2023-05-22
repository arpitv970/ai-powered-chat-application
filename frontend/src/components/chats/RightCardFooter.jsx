import { Button, Input } from '@chakra-ui/react';
import { IoMdSend } from 'react-icons/io';

const RightCardFooter = () => {
    return (
        <div className='flex w-[100%]'>
            <Button m={2} colorScheme='teal'>
                AI
            </Button>
            <Input m={2} placeholder='Start Chatting...' />
            <Button m={2} colorScheme='cyan'>
                <IoMdSend />
            </Button>
        </div>
    );
};

export default RightCardFooter;
