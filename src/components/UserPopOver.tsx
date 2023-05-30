import React from "react";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import { currentUserSelector } from "@/store/selectors/user.selector";

// interface Props {
//   // profileUrl: string; will add it
// }
const UserPopOver: React.FC = () => {
  const user = useSelector(currentUserSelector);
  const profileItem = user
    ? [
        { id: 1, title: "Profile", path: "/profile" },
        { id: 2, title: "Signout", path: "/signout" },
      ]
    : [
        { id: 1, title: "Profile", path: "/profile" },
        { id: 0, title: "signIn/signUp", path: "/signin-signup" },
      ];
  return (
    <div>
      <Dropdown dropdownItems={profileItem} />
    </div>
  );
};

export default React.memo(UserPopOver);
