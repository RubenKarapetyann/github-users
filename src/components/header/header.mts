import { follow } from "../../routing/navigation.mjs"
import searchInputLayout from "../searchInput/searchInput.mjs"
import text from "../text/text.mjs"

const header = () => {
    const header = document.createElement("header")
    header.classList.add("header__container")

    header.appendChild(text({label : "The Github Users", size : 28, weight : "bold"}))
    header.appendChild(text({label : "Find a user you want here", size : 12}))

    header.appendChild(searchInputLayout)

    follow((currentPathname, prevoiusPathname) => {
        if(currentPathname !== prevoiusPathname){
            searchInputLayout.value = ""
        }
    })
    return header
}

const headerLayout = header()
export default headerLayout