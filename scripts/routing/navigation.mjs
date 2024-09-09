const followedListeners = [];
export const follow = (listener) => {
    followedListeners.push(listener);
};
export const navigate = (url, state = {}) => {
    history.pushState(Object.assign(Object.assign({}, history.state), state), "", url);
    followedListeners.forEach(listener => listener(location.pathname));
};
export const changeState = (state) => {
    history.replaceState(Object.assign(Object.assign({}, history.state), state), "");
    followedListeners.forEach(listener => listener(location.pathname));
};
window.onpopstate = () => {
    followedListeners.forEach(listener => listener(location.pathname));
};
