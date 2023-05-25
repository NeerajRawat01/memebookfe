import { sectionList } from "@/constants/sectionList";
import { currentsectionSelector } from "@/store/selectors/meme.selector copy";
import { setSection } from "@/store/slices/sectionSlice";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatSection from "./sections/ChatSection";
import ExploreSection from "./sections/ExploreSection";
import FavouriteSection from "./sections/FavouriteSection";
import HomeSection from "./sections/HomeSection";
import SearchSection from "./sections/SearchSection";
import SettingSection from "./sections/SettingSection";
const HomePage = () => {
  const dispatch = useDispatch();
  const section = useSelector(currentsectionSelector);
  function handleClick(section: string) {
    dispatch(setSection(section));
  }
  const itemStyle = "text-left p-2 my-2";
  const itemWhenClickedStyle = itemStyle + " text-blue-800 font-bold";
  return (
    <div className="flex">
      <div className="hidden md:flex flex-col  fixed h-screen border-r-2 bg-gray-100 px-14 py-5  gap-10 font-semibold">
        {sectionList.map((e) => (
          <button
            onClick={() => handleClick(e.section)}
            className={section === e.section ? itemWhenClickedStyle : itemStyle}
          >
            {e.label}
          </button>
        ))}
      </div>
      {/* Section area */}
      <div className="md:ml-[12.32rem]">
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
