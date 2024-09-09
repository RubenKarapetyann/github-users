export const addUserToStorage = (user) => {
    const usersListString = localStorage.getItem("favourites");
    if (!usersListString) {
        localStorage.setItem("favourites", JSON.stringify([user]));
        return [user];
    }
    const usersList = JSON.parse(usersListString);
    usersList.push(user);
    localStorage.setItem("favourites", JSON.stringify(usersList));
    return usersList;
};
export const getListOfUsersFromStorage = () => {
    const usersListString = localStorage.getItem("favourites");
    if (!usersListString) {
        return [];
    }
    const usersList = JSON.parse(usersListString);
    return usersList;
};
export const getUserFromStorage = (id) => {
    const usersListString = localStorage.getItem("favourites");
    if (!usersListString) {
        return null;
    }
    const usersList = JSON.parse(usersListString);
    const favouriteUser = usersList.find(user => user.id === id);
    return favouriteUser ? favouriteUser : null;
};
export const deleteUserFromStorageById = (id) => {
    const usersListString = localStorage.getItem("favourites");
    if (!usersListString) {
        return [];
    }
    const usersList = JSON.parse(usersListString);
    const usersListWithDeletedUser = usersList.filter(user => user.id !== id);
    localStorage.setItem("favourites", JSON.stringify(usersListWithDeletedUser));
    return usersListWithDeletedUser;
};
export const handleUserByHisActivity = (user, isInFavourite) => {
    let isFavourite = isInFavourite;
    if (isInFavourite === undefined) {
        isFavourite = Boolean(getUserFromStorage(user.id));
    }
    if (isFavourite) {
        deleteUserFromStorageById(user.id);
    }
    else {
        addUserToStorage(user);
    }
};
