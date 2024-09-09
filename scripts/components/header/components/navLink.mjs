import link from "../../link/link.mjs";
import text from "../../text/text.mjs";
const navLink = (url, displayName) => {
    const linkContainer = document.createElement("div");
    linkContainer.appendChild(text({ label: displayName, size: 15 }));
    const navLinkComponent = link(url, linkContainer);
    return navLinkComponent;
};
export default navLink;
