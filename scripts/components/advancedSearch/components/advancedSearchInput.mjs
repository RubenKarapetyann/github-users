import { changeState } from "../../../routing/navigation.mjs";
import flexContainer from "../../container/container.mjs";
const advancedSearchInput = ({ title, initialValue, maxValue, name }) => {
    const input = document.createElement("input");
    input.type = "number";
    input.pattern = "[0-9]*";
    input.min = "0";
    input.max = maxValue.toString();
    input.value = initialValue.toString();
    input.id = title;
    input.classList.add("advanced-search-input");
    const label = document.createElement("label");
    label.innerText = title;
    label.htmlFor = title;
    let timeoutId;
    input.addEventListener("input", () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if (input.checkValidity()) {
                changeState({
                    [name]: input.value
                });
            }
        }, 300);
    });
    const container = flexContainer([
        label, input
    ], ["advanced-search-input_container"]);
    return container;
};
export default advancedSearchInput;
