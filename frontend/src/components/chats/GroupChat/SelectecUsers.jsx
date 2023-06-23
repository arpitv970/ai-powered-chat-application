import { Avatar } from '@chakra-ui/react';

const SelectecUsers = ({ user }) => {
    return (
        <span className='border border-primary my-2 mx-auto flex px-2 py-4 justify-around items-center max-w-max rounded-full h-[2rem] transition-all ease-in-out duration-200 hover:text-white hover:bg-gray-700 cursor-pointer'>
            <Avatar size='xs' m='2' name={user?.name} src={user?.pic} />
            {user?.name}

            {/* TODO: Create a cancel button with its functionality */}
            {/* <CiCircleRemove
                size='1.5rem'
                className='hover:text-red-500 cursor-pointer mx-2 transition-all ease-in-out duration-200'
            /> */}
        </span>
    );
};

export default SelectecUsers;
