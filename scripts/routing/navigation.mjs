const followedListeners = [];
export const follow = (listener) => {
    followedListeners.push(listener);
};
export const navigate = (url, state = {}) => {
    const previousPathname = location.pathname;
    history.pushState(Object.assign(Object.assign({}, history.state), state), "", url);
    followedListeners.forEach(listener => listener(location.pathname, previousPathname));
};
export const changeState = (state) => {
    const previousPathname = location.pathname;
    history.replaceState(Object.assign(Object.assign({}, history.state), state), "");
    followedListeners.forEach(listener => listener(location.pathname, previousPathname));
};
window.onpopstate = () => {
    followedListeners.forEach(listener => listener(location.pathname));
};
