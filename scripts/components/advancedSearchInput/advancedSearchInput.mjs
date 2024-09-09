import flexContainer from "../container/container.mjs";
const advancedSearchInput = (title, initalValue = 0) => {
    const input = document.createElement("input");
    input.type = "number";
    input.pattern = "[0-9]*";
    input.min = "0";
    input.max = "9999";
    input.value = initalValue.toString();
    input.classList.add("advanced-search-input");
    const label = document.createElement("label");
    label.innerText = title;
    const container = flexContainer([
        label, input
    ], ["advanced-search__container"]);
    return container;
};
export default advancedSearchInput;
