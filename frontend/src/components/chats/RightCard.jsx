import ChatArea from './ChatArea';
import RightCardFooter from './RightCardFooter';
import RightCardHeader from './RightCardHeader';

const RightCard = () => {
    return (
        <div className='border-[2.5px] border-black rounded-xl h-[100%] w-[75%] ml-1 flex flex-col justify-between items-start px-3 py-2'>
            <RightCardHeader />
            <ChatArea />
            <RightCardFooter />
        </div>
    );
};

export default RightCard;
