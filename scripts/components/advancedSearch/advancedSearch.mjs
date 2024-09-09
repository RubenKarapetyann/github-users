import ADVANCDE_SEARCH_ELEMENTS from "../../constants/advancedSearch.mjs";
import flexContainer from "../container/container.mjs";
import advancedSearchInput from "./components/advancedSearchInput.mjs";
const advancedSearch = () => {
    const elements = ADVANCDE_SEARCH_ELEMENTS.map(element => {
        return advancedSearchInput(element);
    });
    const conatiner = flexContainer([flexContainer(elements, ["advanced-search__container"])], ["advanced-search__wrapper"]);
    return conatiner;
};
const advancedSearchLayout = advancedSearch();
export default advancedSearchLayout;
