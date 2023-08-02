import Image from "next/image";
import Link from "next/link";
import React, { FC, memo } from "react";
import github from "../../../public/github.png";
import instagram from "../../../public/instagram.png";
import linkdin from "../../../public/linkedin.png";
import twitter from "../../../public/twitter.png";

const DeveloperCard: FC = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col p-3 gap-4 md:flex-row justify-between bg-gray-200 w-full rounded shadow-lg">
        <img
          className="w-[16rem] h-[16rem] object-cover rounded-full"
          src="./myPic.jpeg"
          alt=""
        />
        <div className="px-3 py-2 flex flex-col">
          <p className="text-lg font-serif">
            Hi, i'm <span className="text-blue-700">Neeraj</span> I develop
            ,user intefaces and Web applications.
          </p>
          <p className="lg:w-[27rem] mt-4">
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Next, and
            Node.js. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to
            life!
          </p>
          <div className="flex  gap-10 mt-5">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/neeraj-singh0/"
            >
              <Image className="w-8 h-8" src={linkdin} alt={""} />
            </Link>
            <Link target="_blank" href="https://twitter.com/Neerajsingghh">
              <Image className="w-8 h-8" src={twitter} alt={""} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/Neeraj_rawat01"
            >
              <Image className="w-8 h-8" src={instagram} alt={""} />
            </Link>
            <Link target="_blank" href="https://github.com/NeerajRawat01">
              <Image className="w-8 h-8" src={github} alt={""} />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default memo(DeveloperCard);
