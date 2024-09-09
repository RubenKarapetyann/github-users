import { PALETTE } from "../../constants/palette.mjs";
import breaker from "../break/break.mjs";
import flexContainer from "../container/container.mjs";
import image from "../image/image.mjs";
import text from "../text/text.mjs";
const userProfileLayout = ({ login, location, id, avatar_url, followers, following, bio, name }) => {
    const container = document.createElement("div");
    container.classList.add("user-profile__container");
    container.appendChild(image({
        url: avatar_url,
        width: 250,
        alt: "avatar img"
    }));
    const userInfoContainer = document.createElement("div");
    userInfoContainer.classList.add("user-info__conatiner");
    userInfoContainer.appendChild(text({ label: login, color: PALETTE.orange, size: 28 }));
    userInfoContainer.appendChild(text({ label: name, color: PALETTE.strongGray, size: 15 }));
    userInfoContainer.appendChild(breaker());
    userInfoContainer.appendChild(flexContainer([
        text({ label: `followers: ${followers}`, color: PALETTE.strongGray }),
        text({ label: `following: ${following}`, color: PALETTE.strongGray })
    ]));
    userInfoContainer.appendChild(text({ label: bio ? bio : "no bio yet", color: PALETTE.strongGray }));
    userInfoContainer.appendChild(text({ label: `lives in ${location}`, color: PALETTE.strongGray }));
    container.appendChild(userInfoContainer);
    return container;
};
export default userProfileLayout;
