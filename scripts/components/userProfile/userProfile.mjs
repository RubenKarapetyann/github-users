import { USERS_ENDPOINT } from "../../constants/api.mjs";
import { getDataByFetch } from "../../utils/api.mjs";
import { recomendedUsers } from "../usersList/index.mjs";
import userProfileLayout from "./components/userProfileLayout.mjs";
const userProfile = (login) => {
    const userLayoutContainer = document.createElement("div");
    userLayoutContainer.innerHTML = "loading...";
    userLayoutContainer.classList.add("flex-column");
    getDataByFetch(`${USERS_ENDPOINT}/${login}`)
        .then((user) => {
        userLayoutContainer.innerHTML = "";
        userLayoutContainer.appendChild(userProfileLayout(user));
        userLayoutContainer.appendChild(recomendedUsers());
    });
    return userLayoutContainer;
};
export default userProfile;
