export const getNextRoute = (pathname, routes) => {
    const paths = pathname.split("/").slice(1);
    const parametrs = [];
    const nextRoute = routes.find(route => {
        const nextRoutePaths = route.path.split("/").slice(1);
        if (nextRoutePaths.length !== paths.length) {
            return false;
        }
        for (let i in nextRoutePaths) {
            if (nextRoutePaths[i].startsWith(":")) {
                parametrs.push(paths[i]);
            }
            else if (nextRoutePaths[i] !== paths[i]) {
                return false;
            }
        }
        return true;
    });
    return { nextRoute, parametrs };
};
export const getFilterParams = () => {
    const params = new URLSearchParams(location.search);
    const search = params.get("s");
    const state = history.state;
    return { search, state };
};
