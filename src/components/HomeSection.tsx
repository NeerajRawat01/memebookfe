import { memo } from "react";
import { Counter } from "./Counter";
const HomeSection = () => {
  return (
    <div className="flex flex-col gap-3">
      This is Home section
      <Counter />
    </div>
  );
};

export default memo(HomeSection);
