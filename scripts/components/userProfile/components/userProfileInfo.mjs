import breaker from "../../break/break.mjs";
import flexContainer from "../../container/container.mjs";
import text from "../../text/text.mjs";
import { PALETTE } from "../../../constants/palette.mjs";
const userProfileInfo = ({ login, name, followers, following, bio, location }) => {
    const userInfoContainer = document.createElement("div");
    userInfoContainer.classList.add("user-info__conatiner");
    userInfoContainer.appendChild(flexContainer([
        text({ label: login, color: PALETTE.orange, size: 28 }),
        text({ label: name, color: PALETTE.strongGray, size: 15 })
    ], ["user-profile-name__container"]));
    userInfoContainer.appendChild(breaker());
    userInfoContainer.appendChild(flexContainer([
        flexContainer([
            text({ label: "followers: ", color: PALETTE.black, weight: "bold" }),
            text({ label: String(followers), color: PALETTE.strongGray })
        ], ["user-follow-info__container"]),
        flexContainer([
            text({ label: "following: ", color: PALETTE.black, weight: "bold" }),
            text({ label: String(following), color: PALETTE.strongGray })
        ], ["user-follow-info__container"])
    ], ["user-follow-info__container"]));
    userInfoContainer.appendChild(text({ label: bio ? bio : "no bio yet", color: PALETTE.strongGray }));
    // userInfoContainer.appendChild(text({label: `lives in ${location}`, color: PALETTE.strongGray}))
    return userInfoContainer;
};
export default userProfileInfo;
