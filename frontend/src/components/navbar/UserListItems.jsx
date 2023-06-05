import { Avatar } from '@chakra-ui/react';

const UserListItems = ({ handleUserList, user }) => {
    return (
        <div
            onClick={handleUserList}
            className='border border-primary rounded-xl flex justify-start items-start p-1 my-2 hover:bg-gray-300 transition-all ease-in-out duration-200 cursor-pointer'
        >
            <div className='mx-1 my-1'>
                <Avatar src={user?.pic} />
            </div>
            <div className='mx-1 my-1 w-[100%]'>
                <p className='font-bold'>{user?.name}</p>
                <p>{user?.email}</p>
            </div>
        </div>
    );
};

export default UserListItems;
