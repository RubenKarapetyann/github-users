import { follow } from "../../routing/navigation.mjs"
import { UsersList } from "../../types/api"
import { deleteUserFromStorageById, getListOfUsersFromStorage } from "../../utils/localStorage.mjs"
import { getFilterParams } from "../../utils/routing.mjs"
import card from "../card/card.mjs"
import usersListContainer from "./components/usersListContainer.mjs"

const favouriteUsers = () => {
    const container = usersListContainer()

    const renderUsers = (list: UsersList) => {
        list.forEach(user => {
            const onStarClick = () => {
                deleteUserFromStorageById(user.id)
                container.removeChild(currentCard)
            }
            const currentCard = card({
                login: user.login,
                avatar_url: user.avatar_url,
                id: user.id,
                onStarClick: onStarClick,
                isInFavourite: true
            })
            container.appendChild(currentCard)
        })
    }

    const getAndRenderUsers = () => {
        const users = getListOfUsersFromStorage()
        renderUsers(users)
    }

    getAndRenderUsers()

    follow((pathname) => {
        if (pathname !== "/favourite") return

        const { search } = getFilterParams()
        if (!search) {
            history.replaceState(history.state, "", "/favourite")
            container.innerHTML = ""
            return getAndRenderUsers()
        }
        container.innerHTML = ""
        const users = getListOfUsersFromStorage().filter(user => new RegExp(search).test(user.login))
        renderUsers(users)
    })

    return container
}

export default favouriteUsers