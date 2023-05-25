import { sectionList } from "@/constants/sectionList";
import { currentsectionSelector } from "@/store/selectors/meme.selector copy";
import { setSection } from "@/store/slices/sectionSlice";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

type MenuProps = {
  onCrossClicked: () => void;
  close: () => void;
};

const Sidebar = ({ onCrossClicked, close }: MenuProps) => {
  const dispatch = useDispatch();
  const section = useSelector(currentsectionSelector);
  const itemStyle = "text-left p-2 my-2 px-7";
  const itemWhenClickedStyle = itemStyle + " text-blue-800 font-bold";
  function handleClick(section: string) {
    dispatch(setSection(section));
  }
  return (
    <aside className="left-0 top-0 fixed text-gray-700 bg-slate-50 w-72 h-screen shadow-xl">
      <div className="flex flex-col">
        <div className="flex justify-between px-5 text-white items-center bg-blue-500 h-16">
          <h1 className="font-semibold text-2xl">MemeBook</h1>
          <RxCrossCircled
            onClick={onCrossClicked}
            className="text-2xl font-semibold cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-2 py-3">
          {sectionList.map((e) => (
            <button
              onClick={() => {
                handleClick(e.section);
                close();
              }}
              className={
                section === e.section ? itemWhenClickedStyle : itemStyle
              }
            >
              {e.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
