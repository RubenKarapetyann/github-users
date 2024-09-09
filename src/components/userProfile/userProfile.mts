import { USERS_ENDPOINT } from "../../constants/api.mjs"
import { User } from "../../types/api"
import { getDataByFetch } from "../../utils/api.mjs"
import { recomendedUsers } from "../usersList/index.mjs"
import userProfileLayout from "./components/userProfileLayout.mjs"

const userProfile = (login: string) => {
    const userLayoutContainer = document.createElement("div")
    userLayoutContainer.innerHTML = "loading..."
    userLayoutContainer.classList.add("flex-column")

    getDataByFetch(`${USERS_ENDPOINT}/${login}`)
        .then((user: User) => {
            userLayoutContainer.innerHTML = ""
            userLayoutContainer.appendChild(userProfileLayout(user))
            userLayoutContainer.appendChild(recomendedUsers())
        })

    return userLayoutContainer
}

export default userProfile