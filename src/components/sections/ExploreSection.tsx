import { auth } from "@/firebase/firebase";
import { memeListSelector } from "@/store/selectors/meme.selector";
import { fetchMemes } from "@/store/slices/memeSlice";
import { User } from "firebase/auth";
import React, { FC, memo, useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import MemeCard from "../cards/MemeCard";
import {
  currentUserSelector,
  verifyingUserSelector,
} from "@/store/selectors/user.selector";

const ExploreSection: FC = () => {
  const dispatch = useDispatch();
  const memes = useSelector(memeListSelector);
  const user = useSelector(currentUserSelector);
  const verifyingUser = useSelector(verifyingUserSelector);
  useEffect(() => {
    dispatch(fetchMemes());
  }, []);

  const download = async (url: string, name: string) => {
    const image = await fetch(url);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <React.Fragment>
      {user ? (
        <div className="bg-gray-300 flex flex-wrap gap-7 p-3 justify-center">
          {memes.map((e) => (
            <MemeCard name={e.name} url={e.url} onClick={download} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center pr-60 pb-32 w-screen h-screen">
          {verifyingUser ? (
            <BiLoaderCircle className="animate-spin text-blue-600 text-7xl" />
          ) : (
            "Please Logged In first"
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default memo(ExploreSection);
