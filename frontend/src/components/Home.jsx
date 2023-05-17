import { useSelector } from 'react-redux';
import Chat from './chats/Chat';
import { Link } from 'react-router-dom';

const Home = () => {
    const isLogged = useSelector((state) => state.isLogged);
    console.log('userlogged', isLogged);
    return (
        <div>
            {!isLogged ? (
                <section className='flex flex-col justify-center items-center mt-2 mb-5 text-[30px]'>
                    <p>Already on AI Powered Chat Application?</p>
                    <Link to='/login'>
                        <p className='text-[#3F00F3]'>Log In</p>
                    </Link>
                </section>
            ) : (
                <Chat />
            )}
        </div>
    );
};

export default Home;
