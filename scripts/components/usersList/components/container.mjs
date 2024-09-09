const favouriteUsers = () => {
    const usersListContainer = document.createElement("div");
    usersListContainer.classList.add("users-list__container");
    const renderUsers = (list) => {
        list.forEach(user => {
            const onStarClick = () => {
                deleteUserFromStorageById(user.id);
                return false;
            };
            const currentCard = card({
                login: user.login,
                avatar_url: user.avatar_url,
                id: user.id,
                onStarClick: onStarClick,
                isInFavourite: true
            });
            usersListContainer.appendChild(currentCard);
        });
    };
    const getAndRenderUsers = () => {
        const users = getListOfUsersFromStorage();
        renderUsers(users);
    };
    getAndRenderUsers();
    follow(() => {
        if (location.pathname !== "/favourite")
            return;
        const params = new URLSearchParams(location.search);
        const search = params.get("s");
        if (!search) {
            history.replaceState({}, "", "/favourite");
            usersListContainer.innerHTML = "";
            return getAndRenderUsers();
        }
        usersListContainer.innerHTML = "";
        const users = getListOfUsersFromStorage().filter(user => new RegExp(search).test(user.login));
        renderUsers(users);
    });
    return usersListContainer;
};
export {};
