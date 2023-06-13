/**
 * This is a React component that displays a breathing animation and a countdown, and a button
 * that allows the user to go to next step, rendered accordingly to the state of breathing animation.
 * @returns A React component for a breathing exercise with animations and a button to proceed to the
 * next step. It includes two blob images, a countdown timer, and a circular animation that expands and
 * contracts.
 */
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Breathe({ countStart, setCountStart }) {
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
    <div
      className="relative flex h-screen w-screen flex-col items-center overflow-x-hidden"
      id="breathe"
    >
      <Image
        src={"images/blobr.svg"}
        width={330}
        height={400}
        className="absolute -right-10 top-0 z-0 sm:right-0"
        priority={true}
        alt="blob of light blue shades"
      />
      <Image
        src={"images/blobl.svg"}
        width={330}
        height={400}
        className="absolute -left-10 bottom-0 z-0 sm:left-0"
        priority={true}
        alt="blob of light blue shades"
      />
      <h1
        className={`animated-item show-up pt-5  text-3xl font-bold sm:text-5xl ${
          countStart === 0 ? "fade-out" : ""
        }`}
        aria-live="polite"
      >
        {countStart}
      </h1>
      <div className="my-auto mb-14 flex h-full w-full items-center justify-center sm:mb-0">
        <div className="absolute h-[120px] w-[120px] rounded-full bg-indigo-500 sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[250px]"></div>
        <div
          className={` ${
            countStart === 0 ? "breathe-animation" : ""
          } absolute h-[336px] w-[336px] scale-[0.4] rounded-full bg-indigo-400 bg-opacity-30 opacity-[0.4] hue-rotate-30 sm:h-[420px] sm:w-[420px] md:h-[700px] md:w-[700px]`}
          aria-roledescription="Breathing animation started. Please take 7 slow and deep breaths. Inhaling and exhaling withe ease through your nose."
        ></div>
        <a
          href="#emotions"
          onClick={handleOkayButton}
          aria-label="Let's go to the next step"
          className={` ${
            animationActive ? "opacity-0" : "fade-in"
          } z-30 rounded-full p-2 px-3 text-center text-2xl font-semibold shadow-none hover:shadow-md hover:shadow-indigo-900 active:scale-90 sm:text-3xl`}
        >
          Okay!
        </a>
      </div>
    </div>
  );
}
