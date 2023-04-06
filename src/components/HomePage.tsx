import { memo } from "react";
const HomePage = () => {
  return (
    <>
      <div className="flex justify-center bg-gray-100 px-7 py-2 gap-10 font-semibold">
        <span>Home</span>
        <span>Friend Request</span>
        <span>Chat</span>
        <span>Favourite</span>
        <span>Search</span>
        <span>Setting</span>
      </div>
    </>
  );
};

export default memo(HomePage);
