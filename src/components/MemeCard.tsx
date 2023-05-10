import { memo } from "react";
interface props {
  name: string;
  url: string;
  onClick: (url: string, name: string) => void;
}
const MemeCard: React.FC<props> = ({ name, url, onClick }) => {
  return (
    <div className="bg-blue-300 rounded-sm">
      <div className="flex justify-between text-lg p-2 font-semibold font-mono">
        <span className=" w-[22rem] truncate">{name}</span>
        <button
          onClick={() => onClick(url, name)}
          className="text-base px-3 py-1 text-white font-normal font-sans bg-green-900 shadow-md rounded-2xl"
        >
          Download
        </button>
      </div>
      <img className={`h-[27rem] w-[30rem] `} src={url} alt="" />
    </div>
  );
};

export default memo(MemeCard);
