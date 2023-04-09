import { memo } from "react";
import Dropdown from "./Dropdown";

const Menu = () => {
  return (
    <div className="flex gap-2 justify-between w-full items-center ">
      <h1 className="font-semibold text-2xl">MemeBook</h1>
      <div className="relative">
        <Dropdown />
      </div>
    </div>
  );
};
export default memo(Menu);
