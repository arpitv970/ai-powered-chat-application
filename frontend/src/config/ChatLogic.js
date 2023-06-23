export const getUser = (loggedUser, users) => {
    return users[0]?._id === loggedUser?.user?._id ? users[1] : users[0];
};
