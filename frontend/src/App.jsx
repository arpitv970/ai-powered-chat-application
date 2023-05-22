import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Chat from './components/chats/Chat';
import { useEffect } from 'react';
import Home from './components/Home';
import { authActions } from './store';

const App = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(isLoggedIn);
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('userData'));

        if (localUser) {
            navigate('/chat');
            dispatch(authActions.login());
        }
    }, [navigate, dispatch]);
    return (
        <div className='mx-3 font-poppins'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/chat' element={<Chat />} />
            </Routes>
        </div>
    );
};

export default App;
