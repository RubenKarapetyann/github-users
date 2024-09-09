import advancedSearchLayout from "../components/advancedSearch/advancedSearch.mjs";
import { headerLayout } from "../components/header/index.mjs";
import { getNextRoute } from "../utils/routing.mjs";
import { follow } from "./navigation.mjs";
const router = (routes) => {
    const container = document.createElement("div");
    container.classList.add("flex-column");
    let currentPathName;
    const pathname = location.pathname;
    const { nextRoute, parametrs } = getNextRoute(pathname, routes);
    const setNextRoute = (nextRoute, parametrs, pathname) => {
        const nextChild = nextRoute.component(parametrs);
        if (nextRoute.search) {
            container.appendChild(headerLayout);
        }
        if (nextRoute.advancedSearch) {
            container.appendChild(advancedSearchLayout);
        }
        container.appendChild(nextChild);
        currentPathName = pathname;
    };
    if (!nextRoute) {
        container.appendChild(headerLayout);
        container.appendChild(routes[0].component());
        currentPathName = routes[0].path;
    }
    else {
        setNextRoute(nextRoute, parametrs, pathname);
    }
    follow((pathname) => {
        const { nextRoute, parametrs } = getNextRoute(pathname, routes);
        if (!nextRoute || pathname === currentPathName) {
            return;
        }
        container.innerHTML = "";
        setNextRoute(nextRoute, parametrs, pathname);
    });
    return container;
};
export default router;
