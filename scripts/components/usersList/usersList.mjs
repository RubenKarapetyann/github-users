import { SEARCH_USERS_ENDPOINT, USERS_ENDPOINT } from "../../constants/api.mjs";
import { follow } from "../../routing/navigation.mjs";
import { getDataByFetch, getFilterUrl } from "../../utils/api.mjs";
import { getUserFromStorage, handleUserByHisActivity } from "../../utils/localStorage.mjs";
import { getFilterParams } from "../../utils/routing.mjs";
import card from "../card/card.mjs";
import usersListContainer from "./components/usersListContainer.mjs";
const options = {
    rootMargin: "0px",
    threshold: 0.1,
};
export const usersList = () => {
    const container = usersListContainer();
    let lastUser;
    let pageCount = 1;
    const observer = new IntersectionObserver((entries) => {
        const lastCard = entries[0];
        if (lastCard.isIntersecting) {
            observer.unobserve(lastCard.target);
            const { search, state } = getFilterParams();
            if (!search && !state) {
                return getAndRenderUsers(`${USERS_ENDPOINT}?per_page=9&since=${lastUser.id}`);
            }
            pageCount += 1;
            getAndRenderUsers(`${SEARCH_USERS_ENDPOINT}?q=${search ? search + "+" : ""}${getFilterUrl(state)}&per_page=9&page=${pageCount}`);
        }
    }, options);
    const renderUsers = (list) => {
        list.forEach((user, i) => {
            const currentCard = card({
                login: user.login,
                avatar_url: user.avatar_url,
                id: user.id,
                isInFavourite: Boolean(getUserFromStorage(user.id)),
                onStarClick: (isActive) => handleUserByHisActivity(user, isActive)
            });
            if (i === list.length - 1) {
                observer.observe(currentCard);
                lastUser = user;
            }
            container.appendChild(currentCard);
        });
    };
    const getAndRenderUsers = (endpoint) => {
        getDataByFetch(endpoint).then((users) => {
            renderUsers(users.items ? users.items : users);
        });
    };
    getAndRenderUsers(`${USERS_ENDPOINT}?per_page=9`);
    follow((pathname) => {
        if (pathname !== "/users")
            return;
        const { search, state } = getFilterParams();
        if (!search && !state) {
            container.innerHTML = "";
            pageCount = 1;
            return getAndRenderUsers(`${USERS_ENDPOINT}?per_page=9`);
        }
        if (!search) {
            history.replaceState(state, "", "/users");
        }
        container.innerHTML = "";
        getAndRenderUsers(`${SEARCH_USERS_ENDPOINT}?q=${search ? search + "+" : ""}${getFilterUrl(state)}&per_page=9`);
    });
    return container;
};
export default usersList;
