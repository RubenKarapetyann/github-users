import { PALETTE } from "../../constants/palette.mjs"
import { TextProps } from "../../types/components"

const text = ({ label, color=PALETTE.white, size=18, weight="lighter" }: TextProps) => {
    const text = document.createElement("p")
    text.innerText = label
    text.style.color = color
    text.style.fontSize = `${size}px`
    text.style.fontWeight = weight

    return text
}

export default text