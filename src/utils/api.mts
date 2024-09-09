import { MAX_FOLLOWERS, MAX_REPOS, MIN_FOLLOWERS, MIN_REPOS } from "../constants/advancedSearch.mjs"
import { Filter } from "../types/routing"

export const getDataByFetch = async (url: string) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

    
export const getFilterUrl = (state: Record<string, number>) => {
    const getFilterValue = (element: Filter) => state[element.name] || element.initialValue

    return `repos:${getFilterValue(MIN_REPOS)}..${getFilterValue(MAX_REPOS)}+followers:${getFilterValue(MIN_FOLLOWERS)}..${getFilterValue(MAX_FOLLOWERS)}`
}