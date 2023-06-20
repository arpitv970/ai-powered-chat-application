export const getUser = (loggedUser, users) => {
    console.log('getuser', users[0], loggedUser);
    return users[0]?._id === loggedUser?.user?._id ? users[1] : users[0];
};
