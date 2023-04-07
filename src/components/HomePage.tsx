import { memo, useState } from "react";
import ChatSection from "./ChatSection";
import ExploreSection from "./ExploreSection";
import FavouriteSection from "./FavouriteSection";
import HomeSection from "./HomeSection";
import SearchSection from "./SearchSection";
import SettingSection from "./SettingSection";
const HomePage = () => {
  const [section, setSection] = useState("home");
  return (
    <div className="hidden md:flex ">
      <div className="flex flex-col  fixed h-screen border-r-2 bg-gray-100 px-12 py-7 gap-10 font-semibold">
        <button onClick={() => setSection("home")} className="text-left">
          Home
        </button>
        <button onClick={() => setSection("explore")} className="text-left">
          Explore
        </button>
        <button onClick={() => setSection("chat")} className="text-left">
          Chat
        </button>
        <button onClick={() => setSection("favourite")} className="text-left">
          Favourite
        </button>
        <button onClick={() => setSection("search")} className="text-left">
          Search
        </button>
        <button onClick={() => setSection("setting")} className="text-left">
          Setting
        </button>
      </div>
      <div className="ml-48 px-6 py-5">
        {section === "home" && <HomeSection />}
        {section === "explore" && <ExploreSection />}
        {section === "chat" && <ChatSection />}
        {section === "favourite" && <FavouriteSection />}
        {section === "search" && <SearchSection />}
        {section === "setting" && <SettingSection />}
      </div>
    </div>
  );
};

export default memo(HomePage);
