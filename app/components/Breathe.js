import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function Breathe({countStart, setCountStart}) {
  const [animationActive, setAnimationActive] = useState(true);

  useEffect(() => {
    if (countStart === 0) {
      const interval = setInterval(() => {
        setAnimationActive(false);
        clearInterval(interval);
      }, 71000);
    }
  }, [countStart]);

  const handleOkayButton = () => {
    setCountStart(3);
  };

  return (
    <div className="relative h-screen w-screen flex flex-col items-center overflow--y-visible" id="breathe">
     <Image
            src={"blobr.svg"}
            width={330}
            height={400}
            className="z-0 absolute top-1 right-0"
            priority={true}
          />
           <Image
            src={"blobl.svg"}
            width={330}
            height={400}
            className="z-0 absolute bottom-0 left-0"
            priority={true}
          />
      <h1
        className={`animated-item show-up text-5xl font-bold pt-5 ${
          countStart === 0 ? "fade-out" : ""
        }`}
      >
        {countStart}
      </h1>
      <div className="flex justify-center items-center w-full h-full my-auto">
        <div className="absolute w-[250px] h-[250px] bg-indigo-500 rounded-full"></div>
        <div
          className={` ${
            countStart === 0 ? "breathe-animation" : ""
          } absolute w-[700px] h-[700px] bg-indigo-400 bg-opacity-30 opacity-[0.4] scale-[0.4] hue-rotate-30 rounded-full`}
        ></div>
        <Link
          href="#emotions"
          onClick={handleOkayButton}
          className={` ${
            animationActive ? "opacity-0" : "fade-in"
          } z-30 text-3xl font-semibold text-center p-2 px-3 hover:shadow-md shadow-none hover:shadow-indigo-900 active:scale-90 rounded-full`}
        >
          Okay!
        </Link>
      </div>
    </div>
  );
}
