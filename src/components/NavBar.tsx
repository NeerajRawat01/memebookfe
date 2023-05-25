import Router, { useRouter } from "next/router";
import { memo, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import UserPopOver from "./UserPopOver";
const NavBar = () => {
  const { asPath } = useRouter();
  const [isMenu, setIsMenu] = useState<boolean>(false);
  function handleBurgerClick() {
    setIsMenu((prevIsMenu: boolean) => {
      return !prevIsMenu;
    });
  }
  function close() {
    setIsMenu(false);
  }

  return (
    <nav className="bg-blue-500 backdrop-blur top-0 sticky z-10 text-white  h-16 flex items-centers sm:h-20">
      {asPath === "/" ? (
        <div className="w-11/12 mx-auto flex items-center px-6 sm:hidden">
          <RxHamburgerMenu
            onClick={handleBurgerClick}
            className="font-semibold text-2xl cursor-pointer"
          />
          {isMenu && (
            <Sidebar onCrossClicked={handleBurgerClick} close={close} />
          )}
        </div>
      ) : (
        <IoIosArrowRoundBack
          onClick={Router.back}
          className="text-5xl ml-7 mt-2 md:mt-[1.13rem] hover:cursor-pointer"
        />
      )}
      <div className="flex px-6 items-center justify-end md:justify-between w-full">
        <h1
          onClick={() => Router.push("/")}
          className="hidden md:block font-semibold text-2xl hover:cursor-pointer"
        >
          MemeBook
        </h1>
        <UserPopOver />
      </div>
    </nav>
  );
};

export default memo(NavBar);
