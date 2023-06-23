import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <section className='flex flex-col justify-center items-center mt-2 mb-5 text-[30px]'>
                <p>Already on AI Powered Chat Application?</p>
                <Link to='/login'>
                    <p className='text-[#3F00F3]'>Log In</p>
                </Link>
            </section>
        </div>
    );
};

export default Home;
