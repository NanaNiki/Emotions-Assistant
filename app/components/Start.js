import { useState, useEffect } from "react";
import { observeScroll } from "../page";
import Image from "next/image";

export default function Start() {
  const [countStart, setCountStart] = useState(3);
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

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
    setCountStart(3)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-evenly h-screen font-bold overflow-visible">
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
          className="z-0 absolute -bottom-24 -right-20 rotate-12"
        />
        <Image
          src={"btl.svg"}
          width={400}
          height={400}
          className="z-0 absolute -top-24 -left-24"
        />
        <Image
          src={"btr.svg"}
          width={400}
          height={400}
          className="z-0 absolute -top-20 -right-20"
        />
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
          First let's breathe a little
        </h1>
        <a href="#breathe">
          <button
            onClick={handleStartCountDown}
            className="bg-purple-950 hover:bg-pink-900 text-white rounded-full p-2.5 px-5 text-3xl animated-item show-up delay-[0.5s]"
          >
            Ready?
          </button>
        </a>
      </div>
      <div className="h-screen w-full" id="breathe">
        <div className="flex flex-col items-center">
          <h1
            className={` text-5xl font-bold p-5 pt-10 ${
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
            <button onClick={handleOkayButton}
              className={` ${
                animationActive ? "opacity-0" : "fade-in"
              } z-30 text-3xl font-semibold text-center p-2 px-3 hover:shadow-md shadow-none hover:shadow-indigo-900 active:scale-90 rounded-full`}
            >
              Okay!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}