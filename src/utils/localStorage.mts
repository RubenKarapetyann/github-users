import { UserOfList, UsersList } from "../types/api";

export const addUserToStorage = (user: UserOfList) => {
    const usersListString = localStorage.getItem("favourites")
    if (!usersListString) {
        localStorage.setItem("favourites", JSON.stringify([user]))
        return [user]
    }

    const usersList = JSON.parse(usersListString)
    usersList.push(user)
    localStorage.setItem("favourites", JSON.stringify(usersList))

    return usersList as UsersList
}

export const getListOfUsersFromStorage = () => {
    const usersListString = localStorage.getItem("favourites")
    if (!usersListString) {
        return []
    }

    const usersList = JSON.parse(usersListString)
    return usersList as UsersList
}

export const getUserFromStorage = (id: number) => {
    const usersListString = localStorage.getItem("favourites")
    if (!usersListString) {
        return null
    }

    const usersList: UsersList = JSON.parse(usersListString)
    const favouriteUser = usersList.find(user => user.id === id)
    return favouriteUser ? favouriteUser : null
}

export const deleteUserFromStorageById = (id: number) => {
    const usersListString = localStorage.getItem("favourites")
    if (!usersListString) {
        return []
    }

    const usersList: UsersList = JSON.parse(usersListString)
    const usersListWithDeletedUser = usersList.filter(user => user.id !== id)

    localStorage.setItem("favourites", JSON.stringify(usersListWithDeletedUser))
    return usersListWithDeletedUser
}

export const handleUserByHisActivity = (user: UserOfList, isInFavourite?: boolean) => {
    let isFavourite = isInFavourite
    if (isInFavourite === undefined) {
        isFavourite = Boolean(getUserFromStorage(user.id))
    }

    if (isFavourite) {
        deleteUserFromStorageById(user.id)
    } else {
        addUserToStorage(user)
    }
}