import React from "react";
import Dropdown from "./Dropdown";

// interface Props {
//   // profileUrl: string; will add it
// }
const UserPopOver: React.FC = () => {
  const profileItem = [
    { id: 0, title: "signIn/signUp", path: "/signin-signup" },
    { id: 1, title: "Profile", path: "/profile" },
    { id: 2, title: "Logout", path: "/logout" },
  ];
  return (
    <div>
      <Dropdown dropdownItems={profileItem} />
    </div>
  );
};

export default React.memo(UserPopOver);
