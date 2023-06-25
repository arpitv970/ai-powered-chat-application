export const getUser = (loggedUser, users) => {
    return users[0]?._id === loggedUser?.user?._id ? users[1] : users[0];
};

export const isLoggedUser = (loggedUser, sender) => {
    return sender?._id === loggedUser?.user?._id ? true : false;
};
