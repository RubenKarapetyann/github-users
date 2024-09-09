export const star = (isActive, onClick) => {
    const starImage = document.createElement("img");
    starImage.alt = "star";
    starImage.width = 20;
    starImage.classList.add("star");
    let isInFavourite = isActive;
    const setImageSrc = () => {
        if (isInFavourite) {
            starImage.src = "/static/star-filled.svg";
            isInFavourite = true;
        }
        else {
            starImage.src = "/static/star.svg";
            isInFavourite = false;
        }
    };
    setImageSrc();
    starImage.addEventListener("click", () => {
        onClick(isInFavourite);
        isInFavourite = !isInFavourite;
        setImageSrc();
    });
    return starImage;
};
export default star;
