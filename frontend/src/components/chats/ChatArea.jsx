import { Spinner } from '@chakra-ui/react';

const ChatArea = ({ loadingMessages }) => {
    return (
        <div className='bg-dimBlue rounded-xl h-[70vh] w-[100%] overflow-y-hidden'>
            {!loadingMessages ? (
                <div className='w-[100%] h-[100%] flex'>
                    <Spinner
                        d='flex'
                        m='auto'
                        justifyContent='center'
                        alignItems='center'
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ChatArea;
