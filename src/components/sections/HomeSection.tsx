import { auth } from "@/firebase/firebase";
import { memeListSelector } from "@/store/selectors/meme.selector";
import { fetchMemes } from "@/store/slices/memeSlice";
import { User } from "firebase/auth";
import React, { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemeCard from "../cards/MemeCard";

const HomeSection: FC = () => {
  const dispatch = useDispatch();
  const memes = useSelector(memeListSelector);
  const [user, setUser] = useState<User>();
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
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      setUser(user);
    } else {
      // User is signed out.
    }
  });

  return (
    <React.Fragment>
      {user ? (
        <div className="bg-gray-300 flex flex-wrap gap-7 p-3 justify-center">
          {memes.map((e) => (
            <MemeCard name={e.name} url={e.url} onClick={download} />
          ))}
        </div>
      ) : (
        <div>Please Logged In first</div>
      )}
    </React.Fragment>
  );
};

export default memo(HomeSection);
