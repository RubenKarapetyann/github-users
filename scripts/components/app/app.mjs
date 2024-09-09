import router from "../../routing/router.mjs";
import { navBar } from "../header/index.mjs";
import userProfile from "../userProfile/userProfile.mjs";
import { usersList, favouriteUsers } from "../usersList/index.mjs";
const app = () => {
    const conatiner = document.createElement("main");
    conatiner.appendChild(navBar());
    conatiner.appendChild(router([
        {
            path: "/users",
            component: usersList,
            search: true,
            advancedSearch: true
        },
        {
            path: "/users/:id",
            component: userProfile,
            search: false,
            advancedSearch: false
        },
        {
            path: "/favourite",
            component: favouriteUsers,
            search: true,
            advancedSearch: false
        }
    ]));
    return conatiner;
};
export default app;
