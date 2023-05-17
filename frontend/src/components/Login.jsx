import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../store';
import { useDispatch } from 'react-redux';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const sendReq = async () => {
        const res = await axios
            .post('http://localhost:5000/api/user/login', {
                email: inputs.email,
                password: inputs.password,
            })
            .catch((err) => console.log(err));
        const data = res.data;

        return data;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendReq()
            .then(() => dispatch(authActions.login()))
            .then(() => navigate('/'))
            .then((data) => console.log(data))
            .catch((err) => {
                alert('Please Enter correct credentials');
                console.log(err);
            });
    };

    return (
        <div>
            <h1 className='text-center font-[700] text-[60px]'>Log In</h1>
            <form
                onSubmit={handleLogin}
                className='w-[75%] mx-auto flex flex-col justify-between drop-shadow-xl'
            >
                <section className='my-3'>
                    <label className='text-left font-[600] text-[38px]'>
                        Email ID
                    </label>
                    <input
                        onChange={handleInput}
                        name='email'
                        type='email'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2  transition-all duration-200 ease-in-out hover:border-devBlue'
                        placeholder='Enter Email Id'
                        required={true}
                    />
                </section>
                <section className='my-3'>
                    <label className='text-left font-[600] text-[38px]'>
                        Password
                    </label>
                    <input
                        onChange={handleInput}
                        name='password'
                        type='password'
                        className='border-[3.5px] rounded-[25px] w-[100%] border-black text-[30px] px-5 py-2 transition-all duration-200 ease-in-out hover:border-devBlue'
                        placeholder='Enter Password'
                        required={true}
                    />
                </section>
                <button
                    type='submit'
                    className='text-[35px] font-[700] text-white bg-[#3F00F3] w-[16%] h-[10vh] text-center flex justify-center items-center mx-auto mt-5 border-[3px] rounded-[36px] border-black transition-all duration-200 ease-in-out hover:text-devYellow'
                >
                    Log In
                </button>
            </form>
            <section className='flex flex-col justify-center items-center mt-2 mb-5 text-[30px]'>
                <p>Already on AI Powered Chat Application?</p>
                <p>Create Your account</p>
                <Link to='/signup'>
                    <p className='text-[#3F00F3]'>Sign Up</p>
                </Link>
            </section>
        </div>
    );
};

export default Login;
