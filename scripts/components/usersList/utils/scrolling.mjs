const options = {
    rootMargin: "0px",
    threshold: 0.1,
};
const createObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        const lastCard = entries[0];
        if (lastCard.isIntersecting) {
            observer.unobserve(lastCard.target);
            getAndRenderUsers(`${USERS_ENDPOINT}?per_page=9&since=${9}`);
        }
    }, options);
};
export {};
