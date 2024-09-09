export type FollowedListenerType = (url: string, previousPathname?: string) => void


export interface Route {
    component: Function,
    path: string,
    search: boolean,
    advancedSearch: boolean
}

export interface Filter {
    title: string,
    name: string,
    maxValue: number,
    initialValue: number
}