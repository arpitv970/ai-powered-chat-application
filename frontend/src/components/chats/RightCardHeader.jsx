import { useSelector } from 'react-redux';

const RightCardHeader = ({ personName }) => {
    const userData = useSelector((state) => state.user);
    console.log('aizen', userData?.user?.name);
    return <div className='text-3xl'>{personName}</div>;
};

export default RightCardHeader;
