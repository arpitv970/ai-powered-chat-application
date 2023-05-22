import LeftCardHeader from './LeftCardHeader';
import UserChat from './UserChat';

const LeftCard = () => {
    return (
        <div className='border-[2.5px] border-black rounded-xl h-[100%] w-[25%] mr-1 p-2'>
            <LeftCardHeader />
            <UserChat
                chatName={'Uchiha Itachi'}
                chatDes={'asdf asdf asdf asdf....'}
            />
            <UserChat
                chatName={'Aizen'}
                chatDes={'asdf asdf asdf asdf....'}
            />
            <UserChat
                chatName={'Johan'}
                chatDes={'asdf asdf asdf asdf....'}
            />
        </div>
    );
};

export default LeftCard;
