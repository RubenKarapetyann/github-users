import { UserProfileLayoutProps } from "../../../types/components"
import { addUserToStorage, deleteUserFromStorageById, getUserFromStorage, handleUserByHisActivity } from "../../../utils/localStorage.mjs"
import star from "../../card/components/star.mjs"
import flexContainer from "../../container/container.mjs"
import image from "../../image/image.mjs"
import userProfileInfo from "./userProfileInfo.mjs"

const userProfileLayout = ({
    login, location, id, avatar_url, followers, following, bio, name
}: UserProfileLayoutProps) => {
    const container = document.createElement("div")
    container.classList.add("user-profile__container", "flex-center")

    container.appendChild(flexContainer([image({
        url: avatar_url,
        width: 250,
        alt: "avatar img",
        classList: ["avatar"]
    }), star(Boolean(getUserFromStorage(id)), () => handleUserByHisActivity({ id, avatar_url, login }))]))

    const userInfoContainer = userProfileInfo({ location, login, followers, following, bio, name })

    container.appendChild(userInfoContainer)
    return container
}

export default userProfileLayout