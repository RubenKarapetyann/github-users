import { USERS_ENDPOINT } from "../../constants/api.mjs"
import { UsersList } from "../../types/api"
import { getDataByFetch } from "../../utils/api.mjs"
import { getUserFromStorage, handleUserByHisActivity } from "../../utils/localStorage.mjs"
import card from "../card/card.mjs"
import usersListContainer from "./components/usersListContainer.mjs"

const recomendedUsers = () => {
    const container = usersListContainer()

    const renderUsers = (list: UsersList) => {
        list.forEach(user => {
            const currentCard = card({
                login : user.login,
                avatar_url : user.avatar_url,
                id : user.id,
                isInFavourite : Boolean(getUserFromStorage(user.id)),
                onStarClick : (isActive: boolean) => handleUserByHisActivity(user, isActive)
            })
            container.appendChild(currentCard)
        }) 
    }

    const getAndRenderUsers = (endpoint: string) => {        
        getDataByFetch(endpoint).then((users) => {
            renderUsers(users)
        })
    }

    getAndRenderUsers(`${USERS_ENDPOINT}?per_page=3&since=${Math.floor(Math.random()*5000)}`)

    return container
}

export default recomendedUsers