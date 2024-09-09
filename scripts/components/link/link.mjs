import { navigate } from "../../routing/navigation.mjs";
const link = (href, children) => {
    const a = document.createElement("a");
    a.classList.add("link");
    a.href = href;
    if (children) {
        a.appendChild(children);
    }
    a.addEventListener("click", (e) => {
        e.preventDefault();
        navigate(a.href);
    });
    return a;
};
export default link;
