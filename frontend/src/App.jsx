import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home';
import SignUp from './components/SignUp/SignUp';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </div>
    );
};

export default App;
