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
    <aside className="hidden sm:block">
      <div className="flex flex-col gap-2 py-3 text-gray-700 bg-slate-50 fixed h-screen w-48">
        <button onClick={() => setSection("home")} className="flex py-1 hover:bg-blue-500 hover:text-white">
          <span className="px-5 self-start">Home</span>
        </button>
        <button onClick={() => setSection("explore")} className="flex py-1 hover:bg-blue-500 hover:text-white">
          <span className="px-5 self-start">Explore</span>
        </button>
        <button onClick={() => setSection("chat")} className="flex py-1 hover:bg-blue-500 hover:text-white">
          <span className="px-5 self-start">Chat</span>
        </button>
        <button onClick={() => setSection("favourite")} className="flex py-1 hover:bg-blue-500 hover:text-white">
          <span className="px-5 self-start">Favourite</span>
        </button>
        <button onClick={() => setSection("search")} className="flex py-1 hover:bg-blue-500 hover:text-white">
          <span className="px-5 self-start">Search</span>
        </button>
        <button onClick={() => setSection("setting")} className="flex py-1 hover:bg-blue-500 hover:text-white">
          <span className="px-5 self-start">Setting</span>
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
    </aside>
  );
};

export default memo(HomePage);
