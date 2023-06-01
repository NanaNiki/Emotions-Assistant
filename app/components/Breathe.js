/**
 * This is a React component that displays a breathing animation and a countdown, and a button
 * that allows the user to go to next step, rendered accordingly to the state of breathing animation.
 * @returns A React component for a breathing exercise with animations and a button to proceed to the
 * next step. It includes two blob images, a countdown timer, and a circular animation that expands and
 * contracts.
 */
import { useState, useEffect } from "react";
import Link from "next/link";
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
      className="relative h-screen w-screen flex flex-col items-center overflow-x-hidden"
      id="breathe"
    >
      <Image
        src={"images/blobr.svg"}
        width={330}
        height={400}
        className="z-0 absolute top-0 sm:right-0 -right-10"
        priority={true}
        alt="blob of light blue shades"
      />
      <Image
        src={"images/blobl.svg"}
        width={330}
        height={400}
        className="z-0 absolute bottom-0 sm:left-0 -left-10"
        priority={true}
        alt="blob of light blue shades"
      />
      <h1
        className={`animated-item show-up sm:text-5xl  text-3xl font-bold pt-5 ${
          countStart === 0 ? "fade-out" : ""
        }`}
        aria-live="polite"
      >
        {countStart}
      </h1>
      <div className="flex justify-center items-center w-full h-full my-auto">
        <div className="absolute md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] bg-indigo-500 rounded-full"></div>
        <div
          className={` ${
            countStart === 0 ? "breathe-animation" : ""
          } absolute md:w-[700px] md:h-[700px] sm:w-[420px] sm:h-[420px] w-[336px] h-[336px] bg-indigo-400 bg-opacity-30 opacity-[0.4] scale-[0.4] hue-rotate-30 rounded-full`}
          aria-label="Breathing animation started. Please take 7 slow and deep breaths. Inhaling and exhaling withe ease through your nose."
        ></div>
        <Link
          href="#emotions"
          onClick={handleOkayButton}
          aria-label="Let's go to the next step"
          className={` ${
            animationActive ? "opacity-0" : "fade-in"
          } z-30 sm:text-3xl text-2xl font-semibold text-center p-2 px-3 hover:shadow-md shadow-none hover:shadow-indigo-900 active:scale-90 rounded-full`}
        >
          Okay!
        </Link>
      </div>
    </div>
  );
}
