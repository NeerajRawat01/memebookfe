import { sectionType } from "@/enums/sectionType";
import { auth } from "@/firebase/firebase";
import { setSection } from "@/store/slices/sectionSlice";
import { Transition } from "@headlessui/react";
import Router from "next/router";
import React, { memo, useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import DeveloperCard from "../cards/DeveloperCard";
import {
  currentUserSelector,
  verifyingUserSelector,
} from "@/store/selectors/user.selector";
import { BiLoaderCircle } from "react-icons/bi";

const HomeSection = () => {
  const dispatch = useDispatch();
  const [isShowing, setIsShowing] = useState(false);
  const user = useSelector(currentUserSelector);
  const verifyingUser = useSelector(verifyingUserSelector);
  return (
    <React.Fragment>
      {verifyingUser ? (
        <div className="w-screen h-screen pr-60 pb-32 flex justify-center items-center">
          <BiLoaderCircle className="animate-spin text-blue-600 text-7xl" />
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center p-3 lg:ml-60 pt-16">
          <h1 className="text-4xl font-bold">
            <span className="text-blue-700">MemeBook.</span> Platform for
            Creators
          </h1>
          <p className="">
            MemeBook is a free platform for creators, memers get a meme template
            from here and makes it in your way.
          </p>
          <div className="flex gap-4 mt-3">
            {!user && (
              <button
                onClick={() => Router.push("/signin-signup")}
                className="bg-blue-700 px-2 py-1 rounded-sm text-white"
              >
                SignIn / SignUp to access other section.
              </button>
            )}
            <button
              onClick={() => dispatch(setSection(sectionType.EXPLORE))}
              className="bg-gray-400 px-2 py-1 rounded-sm font-semibold"
            >
              Go to explore.
            </button>
          </div>
          <button
            onClick={() => setIsShowing(true)}
            className="flex flex-col gap-2 mt-5 text-blue-700"
          >
            <span>About Developer's</span>
            <BsFillArrowDownCircleFill
              className={`self-center ${
                isShowing ? "" : "animate-bounce"
              }  text-xl`}
            />
          </button>
          <Transition
            show={isShowing}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DeveloperCard />
          </Transition>
        </div>
      )}
    </React.Fragment>
  );
};

export default memo(HomeSection);
