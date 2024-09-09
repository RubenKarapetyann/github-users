import { NAV_BAR } from "../../constants/nav.mjs"
import navLink from "./components/navLink.mjs"

const navBar = () => {
    const navBarContainer = document.createElement("nav")
    navBarContainer.classList.add("nav-container")

    window.addEventListener("scroll", (event) => {
        if (window.scrollY > 30) {
            navBarContainer.classList.add("appearing")
        } else {
            navBarContainer.classList.remove("appearing")
        }
    })

    NAV_BAR.forEach(link => {
        navBarContainer.appendChild(navLink(link.url, link.displayName))
    })

    return navBarContainer
}

export default navBar