import { memo, useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMemes } from "@/store/slices/memeSlice";
import { memeListSelector } from "@/store/selectors/meme.selector";
import MemeCard from "../cards/MemeCard";
const HomeSection = () => {
  const dispatch = useDispatch();
  const memes = useSelector(memeListSelector);
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
      <div className="bg-gray-300 flex flex-wrap gap-7 p-3 justify-center">
        {memes.map((e) => (
          <MemeCard name={e.name} url={e.url} onClick={download} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default memo(HomeSection);
