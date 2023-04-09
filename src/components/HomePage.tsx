import { memo, useState } from "react";
import ChatSection from "./ChatSection";
import ExploreSection from "./ExploreSection";
import FavouriteSection from "./FavouriteSection";
import HomeSection from "./HomeSection";
import SearchSection from "./SearchSection";
import SettingSection from "./SettingSection";
const HomePage = () => {
  const [section, setSection] = useState("home");

  function handleClick(sec: string) {
    setSection(sec);
  }

  const itemStyle = "text-left p-2 my-2";
  const itemWhenClickedStyle = itemStyle + " bg-gray-400";
  return (
    <div className="hidden md:flex ">
      <div className="flex flex-col  fixed h-screen border-r-2 bg-gray-100 px-12 py-5 gap-10 font-semibold">
        <button onClick={() => handleClick("home")} className={section === "home" ? itemWhenClickedStyle : itemStyle}>
          Home
        </button>
        <button onClick={() => handleClick("explore")} className={section === "explore" ? itemWhenClickedStyle : itemStyle}>
          Explore
        </button>
        <button onClick={() => handleClick("chat")} className={section === "chat" ? itemWhenClickedStyle : itemStyle}>
          Chat
        </button>
        <button onClick={() => handleClick("favourite")} className={section === "favourite" ? itemWhenClickedStyle : itemStyle}>
          Favourite
        </button>
        <button onClick={() => handleClick("search")} className={section === "search" ? itemWhenClickedStyle : itemStyle}>
          Search
        </button>
        <button onClick={() => handleClick("setting")} className={section === "setting" ? itemWhenClickedStyle : itemStyle}>
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
