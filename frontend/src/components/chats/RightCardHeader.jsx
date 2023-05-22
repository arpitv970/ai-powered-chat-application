import { Button, Input } from '@chakra-ui/react';
import { IoMdSend } from 'react-icons/io';

const RightCardHeader = () => {
    return (
        <div className='flex flex-col justify-between items-start px-3 py-2 h-[100%]'>
            <div className='text-3xl '>Aizen</div>
            <div className='bg-dimBlue rounded-xl h-[70vh] w-[100%]'></div>
            <div className='flex w-[100%]'>
                <Button m={2} colorScheme='teal'>
                    AI
                </Button>
                <Input m={2} placeholder='Start Chatting...' />
                <Button m={2} colorScheme='cyan'>
                    <IoMdSend />
                </Button>
            </div>
        </div>
    );
};

export default RightCardHeader;
