import { deleteUserFromStorageById } from "../../../utils/localStorage.mjs";
export const onStarClick = (id, isActive) => {
    if (isActive) {
        deleteUserFromStorageById(id);
    }
    else {
    }
};
