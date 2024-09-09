var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MAX_FOLLOWERS, MAX_REPOS, MIN_FOLLOWERS, MIN_REPOS } from "../constants/advancedSearch.mjs";
export const getDataByFetch = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        return yield response.json();
    }
    catch (err) {
        console.log(err);
    }
});
export const getFilterUrl = (state) => {
    const getFilterValue = (element) => state[element.name] || element.initialValue;
    return `repos:${getFilterValue(MIN_REPOS)}..${getFilterValue(MAX_REPOS)}+followers:${getFilterValue(MIN_FOLLOWERS)}..${getFilterValue(MAX_FOLLOWERS)}`;
};
