import { useEffect } from 'react';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import { authActions } from '../../store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const isLoggedIn = useSelector((state) => state.isLoggedIn);

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('userData'));
        dispatch(authActions.setUser());
        if (!localUser) {
            navigate('/login');
        }
    }, [dispatch, navigate]);
    return (
        <div className='flex justify-between items-center m-auto h-[86vh]'>
            <LeftCard />
            <RightCard />
        </div>
    );
};

export default Chat;
