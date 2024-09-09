const flexContainer = (children, classList = []) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.classList.add(...classList);
    children.forEach(child => container.appendChild(child));
    return container;
};
export default flexContainer;
