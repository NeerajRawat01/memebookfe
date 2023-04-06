import Link from "next/link";
import { memo, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  return (
    <>
      <div className="flex px-[1.531rem] top-0 sticky z-10 bg-white bg-opacity-90 backdrop-blur shadow-2xl justify-between tracking-[0.07rem] h-[3.625rem] items-center">
        <div>Neeraj</div>
        <div className=" gap-7 px-12 hidden md:flex">
          <Link href={"#about"}>About</Link>
          <Link href={""}>Work</Link>
          <Link href={""}>Contact</Link>
        </div>
        <div className="sm:hidden">
          {!sidebar ? (
            <RxHamburgerMenu
              onClick={() => setSideBar(true)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <RxCross2
              onClick={() => setSideBar(false)}
              className="text-2xl cursor-pointer "
            />
          )}
        </div>

        <div
          className={`transition-all duration-700 absolute ${
            sidebar ? "opacity-100" : "opacity-0"
          } rounded-lg gap-2 font-semibold right-3 top-20 px-7 py-6 bg-gradient-to-r from-gray-400  to-gray-900  text-white flex flex-col`}
        >
          <Link
            className="snap-proximity"
            onClick={() => setSideBar(false)}
            href={"#about"}
          >
            About
          </Link>
          <Link onClick={() => setSideBar(false)} href={""}>
            Work
          </Link>
          <Link onClick={() => setSideBar(false)} href={""}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
