import SearchUserDrawer from './SearchUserDrawer';
import NavbarIcons from './NavbarIcons';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const isLogged = useSelector((state) => state.isLogged);
    return (
        <div className='border-[2.5px] border-black flex justify-around items-center mx-auto text-center my-2 shadow-lg transition-all ease-in-out duration-300 hover:shadow-xl py-2 px-3 rounded-xl hover:rounded-3xl'>
            {isLogged && <SearchUserDrawer />}
            <span className='font-[700] text-[40px]'>
                AI Powered Chat Appliction
            </span>
            {isLogged && <NavbarIcons />}
        </div>
    );
};

export default Navbar;
