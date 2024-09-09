import { FollowedListenerType } from "../types/routing"

const followedListeners: FollowedListenerType[] = []

export const follow = (listener: FollowedListenerType) => {
    followedListeners.push(listener)
}

export const navigate = (url: string, state: Object = {}) => {
    history.pushState({...history.state, ...state}, "", url)

    followedListeners.forEach(listener => listener(location.pathname))
}

export const changeState = (state: Object) => {
    history.replaceState({...history.state, ...state}, "")

    followedListeners.forEach(listener => listener(location.pathname))
}

window.onpopstate = () => {
    followedListeners.forEach(listener => listener(location.pathname))
}