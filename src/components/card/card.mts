import { PALETTE } from "../../constants/palette.mjs"
import { CardProps } from "../../types/components"
import image from "../image/image.mjs"
import link from "../link/link.mjs"
import text from "../text/text.mjs"
import star from "./components/star.mjs"

const card = ({ login, avatar_url, id, onStarClick, isInFavourite }: CardProps) => {
    const card = document.createElement("div")
    card.classList.add("card", "card-info")

    card.appendChild(star(isInFavourite, onStarClick))


    const cardInfo = document.createElement("div")
    cardInfo.classList.add("card-info__container")
    cardInfo.appendChild(image({
        url: avatar_url,
        width: 150,
        alt: "avatar image",
        classList: ["avatar"]
    }))
    cardInfo.appendChild(text({ label: login, color: PALETTE.orange, weight: "bold" }))
    cardInfo.appendChild(text({ label: `id: ${id}`, color: PALETTE.strongGray, size: 12 }))

    card.appendChild(link(`/users/${login}`, cardInfo))

    return card
}

export default card