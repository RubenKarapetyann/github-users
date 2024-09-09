import { FollowedListenerType } from "../types/routing"

const followedListeners: FollowedListenerType[] = []

export const follow = (listener: FollowedListenerType) => {
    followedListeners.push(listener)
}

export const navigate = (url: string, state: Object = {}) => {
    const previousPathname = location.pathname
    history.pushState({...history.state, ...state}, "", url)

    followedListeners.forEach(listener => listener(location.pathname, previousPathname))
}

export const changeState = (state: Object) => {
    const previousPathname = location.pathname
    history.replaceState({...history.state, ...state}, "")

    followedListeners.forEach(listener => listener(location.pathname, previousPathname))
}

window.onpopstate = () => {
    followedListeners.forEach(listener => listener(location.pathname))
}