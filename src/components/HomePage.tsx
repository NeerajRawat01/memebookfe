import { memo, useState } from "react";
import ChatSection from "./ChatSection";
import ExploreSection from "./ExploreSection";
import FavouriteSection from "./FavouriteSection";
import HomeSection from "./HomeSection";
import SearchSection from "./SearchSection";
import SettingSection from "./SettingSection";
const HomePage = () => {
  const [section, setSection] = useState("home");
  const sectionList = [
    { id: 0, section: "home", label: "Home" },
    { id: 1, section: "explore", label: "Explore" },
    { id: 2, section: "chat", label: "Chat" },
    { id: 3, section: "favourite", label: "Favourite" },
    { id: 4, section: "search", label: "Search" },
    { id: 5, section: "setting", label: "Setting" },
  ];

  function handleClick(section: string) {
    setSection(section);
  }

  const itemStyle = "text-left p-2 my-2";
  const itemWhenClickedStyle = itemStyle + " text-blue-800 font-bold";
  return (
    <div className="hidden md:flex">
      <div className="flex flex-col  fixed h-screen border-r-2 bg-gray-100 px-14 py-5  gap-10 font-semibold">
        {sectionList.map((e) => (
          <button
            onClick={() => handleClick(e.section)}
            className={section === e.section ? itemWhenClickedStyle : itemStyle}
          >
            {e.label}
          </button>
        ))}
      </div>
      <div className="ml-[12.32rem] ">
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
