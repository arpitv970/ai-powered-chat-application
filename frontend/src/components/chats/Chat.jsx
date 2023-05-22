import LeftCard from './LeftCard';
import RightCard from './RightCard';

const Chat = () => {
    return (
        <div className='flex justify-between items-center m-auto h-[86vh]'>
            <LeftCard />
            <RightCard />
        </div>
    );
};

export default Chat;
