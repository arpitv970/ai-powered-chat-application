import UserChat from '../chats/UserChat';

const UserListItems = ({ handleUserList, user }) => {
    return (
        <UserChat
            onClick={handleUserList}
            chatName={user?.name}
            chatDes={user?.email}
            pic={user?.pic}
        />
    );
};

export default UserListItems;
