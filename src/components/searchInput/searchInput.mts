import { navigate } from "../../routing/navigation.mjs"

const searchInput = () => {
    const input = document.createElement("input")
    input.classList.add("search-input")
    input.placeholder = "Search for a user"
    let timeoutId: NodeJS.Timeout

    input.addEventListener("input", () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            const pathname = location.pathname
            navigate(`${pathname}?s=${input.value}`)
        }, 300)
    })

    return input
}

const searchInputLayout = searchInput()
export default searchInputLayout