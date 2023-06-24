import { Button, Input } from '@chakra-ui/react';
import { IoMdSend } from 'react-icons/io';

const RightCardFooter = ({
    handleSubmitMessage,
    newMessage,
    setNewMessage,
}) => {
    const handleTypingMessage = (e) => {
        setNewMessage(e.target.value);
    };
    return (
        <form onSubmit={handleSubmitMessage} className='flex w-[100%]'>
            <Button m={2} colorScheme='teal'>
                AI
            </Button>
            <Input
                onChange={handleTypingMessage}
                m={2}
                placeholder='Start Chatting...'
                value={newMessage}
                required
            />
            <Button type='submit' m={2} colorScheme='cyan'>
                <IoMdSend />
            </Button>
        </form>
    );
};

export default RightCardFooter;
