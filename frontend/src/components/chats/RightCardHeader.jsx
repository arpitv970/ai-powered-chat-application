import { useSelector } from 'react-redux';

const RightCardHeader = () => {
    const userData = useSelector((state) => state.user);
    console.log('aizen', userData?.user?.name);
    return <div className='text-3xl'>Aizen</div>;
};

export default RightCardHeader;
