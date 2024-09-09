const image = ({ url, width = 100, classList = [], alt = "image" }) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    img.width = width;
    img.classList.add(...classList);
    return img;
};
export default image;
