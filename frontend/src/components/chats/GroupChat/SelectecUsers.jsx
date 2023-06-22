const SelectecUsers = ({ user }) => {
    return (
        <span className='border border-primary m-1 px-2 rounded-full max-w-max h-[2rem] flex justify-around items-center transition-all ease-in-out duration-200 hover:text-white hover:bg-gray-700 cursor-pointer'>
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
