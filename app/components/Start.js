import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Start() {
  const [countStart, setCountStart] = useState(3);
  const [animationActive, setAnimationActive] = useState(true);

  const startCountDown = () => {
    const interval = setInterval(() => {
      if (countStart > 0) {
        setCountStart((prev) => {
          if (prev === 1) {
            clearInterval(interval);
          }
          return prev - 1;
        });
      }
    }, 1500);
  };

  useEffect(() => {
    if (countStart === 0) {
      const interval = setInterval(() => {
        setAnimationActive(false);
        clearInterval(interval);
      }, 71000);
    }
  }, [countStart]);

  const handleStartCountDown = () => {
    startCountDown();
  };

  const handleOkayButton = () => {
    setCountStart(3);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-evenly h-screen w-screen font-bold overflow-y-visible overflow-x-hidden">
        <div className="overflow-x-hidden w-screen h-fit">
          <Image
            src={"bbl.svg"}
            width={450}
            height={400}
            className="z-0 absolute -bottom-24 -left-20 rotate-6"
          />
          <Image
            src={"bbr.svg"}
            width={450}
            height={400}
            className="z-0 absolute -bottom-24 right-0"
          />
          <Image
            src={"btl.svg"}
            width={400}
            height={400}
            className="z-0 absolute -top-24 -left-24"
          />
          <Image
            src={"btr.svg"}
            width={430}
            height={400}
            className="z-0 absolute top-0 right-0"
          />
        </div>
        <h1 className="animated-item show-up delay-[2s] sm:text-5xl text-3xl">
          Hello!
        </h1>
        <h1 className="animated-item show-up delay-[3s] sm:text-5xl text-3xl">
          This is your Emotional Assistant!
        </h1>
        <h1 className="animated-item show-up delay-[4s] text-3xl">
          I'm here to assist you in the process of going through emotions.
        </h1>
        <h1 className="animated-item show-up delay-[6s] text-3xl">
          First, let's breathe a little
        </h1>
        <Link
          href="#breathe"
          onClick={handleStartCountDown}
          className="bg-purple-950 hover:bg-pink-900 text-white rounded-full p-2.5 px-5 text-3xl animated-item show-up delay-[0.5s]"
        >
          Ready?
        </Link>
      </div>
      <div className="h-screen w-screen" id="breathe">
        <div className="flex flex-col items-center">
          <h1
            className={`animated-item show-up text-5xl font-bold p-5 pt-10 ${
              countStart === 0 ? "fade-out" : ""
            }`}
          >
            {countStart}
          </h1>
          <div className="relative flex justify-center items-center lg:pt-[25%]">
            <div className="absolute w-[250px] h-[250px] bg-indigo-500 rounded-full"></div>
            <div
              className={` ${
                countStart === 0 ? "breathe-animation" : ""
              } absolute w-[700px] h-[700px] bg-indigo-400 bg-opacity-30 opacity-[0.4] scale-[0.4] hue-rotate-30 rounded-full`}
            ></div>
            <Link href="#emotions"
                onClick={handleOkayButton}
                className={` ${
                  animationActive ? "opacity-0" : "fade-in"
                } z-30 text-3xl font-semibold text-center p-2 px-3 hover:shadow-md shadow-none hover:shadow-indigo-900 active:scale-90 rounded-full`}
              >
                Okay!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
