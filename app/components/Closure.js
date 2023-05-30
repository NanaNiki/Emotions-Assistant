/**
 * The Closure function is a React component that displays a random affirmation or affirmation based on
 * previously selected emotion, with a breathing animation and countdown before transitioning to the
 * next section of the app.
 * @returns A React component is being returned.
 */
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHandSparkles } from "react-icons/fa";
import emotionsData from "../emotions.json";

export default function Closure({
  selectedEmotion,
  affirmation,
  setAffirmation,
}) {
  const [countStart, setCountStart] = useState(3);
  const [animationActive, setAnimationActive] = useState(true);
  const [showAffirmation, setShowAffirmation] = useState(false);
  const [hideTimer, setHideTimer] = useState(false);

  const getAffirmation = () => {
    if (selectedEmotion) {
      let randomNumber = Math.floor(
        Math.random() * selectedEmotion.affirm.length
      );
      while (randomNumber === affirmation) {
        randomNumber = Math.floor(
          Math.random() * selectedEmotion.affirm.length
        );
      }
      setAffirmation(selectedEmotion.affirm[randomNumber]);
    } else {
      /* LEARNING NOTE
       * .flat(); flattens the resulting array of arrays into a single array of affirmations */
      const affirmationsData = emotionsData
        .map((emotion) => emotion.affirm)
        .flat();
      let randomAffirm = Math.floor(Math.random() * affirmationsData.length);
      setAffirmation(affirmationsData[randomAffirm]);
    }
    setShowAffirmation(true);
  };

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

  const handleStartCountDown = () => {
    startCountDown();
    setHideTimer(true);
  };

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
    setHideTimer(false);
  };

  return (
    <div
      className="relative h-screen w-screen flex flex-col items-center overflow-x-hidden"
      id="closure"
    >
      <h1
        className={`${
          affirmation ? "fade-out p-0" : ""
        } animated-item show-up delay-[0.5s] sm:w-8/12 w-11/12 mx-auto sm:text-2xl text-lg p-5 text-center text-pink-300`}
      >
        As we come full circle in this emotional journey, let's take a moment to
        breathe deeply, find solace and renewed energy to continue our emotional
        growth.
      </h1>
      <div className="sm:w-8/12 w-11/12 mx-auto sm:mb-0 mb-10 items-center justify-center flex flex-row">
        {selectedEmotion ? (
          <>
            <span
              className={`${showAffirmation ? "fade-in" : "hidden"}
              delay-500 absolute top-5 sm:w-6/12 outline outline-2 outline-indigo-600 shadow-md shadow-indigo-600 rounded-3xl text-center mt-5 p-2 px-4 mx-4 sm:text-xl text-base`}
            >
              {affirmation}
            </span>
            <button
              onClick={getAffirmation}
              className={`${showAffirmation ? "fade-out" : ""}
            outline outline-2 outline-pink-700 rounded-full w-fit h-fit px-3 py-2 mt-5 lg:mx-auto sm:mx-2 mx-4 sm:text-xl shadow-md shadow-pink-600 hover:duration-700 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-900`}
            >
              Reveal my affirmation
            </button>
          </>
        ) : (
          <>
            <span
              className={`${showAffirmation ? "fade-in" : "hidden"}
              delay-500 absolute top-5 sm:w-6/12 outline outline-2 outline-indigo-600 shadow-md shadow-indigo-600 rounded-3xl text-center mt-5 p-2 px-4 mx-4 sm:text-xl text-base`}
            >
              {affirmation}
            </span>
            <button
              onClick={getAffirmation}
              className={`${showAffirmation ? "fade-out" : ""} 
              outline outline-2 outline-pink-700 rounded-full w-fit h-fit px-3 py-2 mt-5 lg:mx-auto sm:mx-2 mx-4 sm:text-xl shadow-md shadow-pink-600 hover:duration-700 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-900`}
            >
              Reveal random affirmation
            </button>
          </>
        )}
        {hideTimer ? (
          <h1
            className={`absolute right-[48%] text-center sm:text-5xl text-3xl font-bold ${
              countStart === 0 ? "fade-out" : ""
            }`}
          >
            {countStart}
          </h1>
        ) : (
          <button
            onClick={handleStartCountDown}
            className={`${countStart < 3 ? "fade-out" : ""} 
             outline outline-2 outline-pink-700 rounded-full w-fit h-fit px-3 py-2 lg:mx-auto sm:mx-2 mx-4 mt-5 sm:text-xl shadow-md shadow-pink-600 hover:duration-700 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-900`}
          >
            I am ready to breathe
          </button>
        )}
      </div>
      <div className="flex justify-center items-center my-auto pb-32 sm:pb-10">
        <div className="absolute md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] w-[120px] h-[120px] bg-indigo-500 rounded-full"></div>
        <div
          className={` ${
            countStart === 0 ? "breathe-animation" : ""
          } absolute md:w-[560px] md:h-[560px] sm:w-[420px] sm:h-[420px] w-[336px] h-[336px] bg-indigo-400 bg-opacity-30 opacity-[0.4] scale-[0.4] hue-rotate-30 rounded-full`}
        ></div>

        <Link
          href="#thankyou"
          onClick={handleOkayButton}
          className={` ${
            animationActive ? "opacity-0" : "fade-in"
          } z-30 sm:text-5xl text-4xl font-semibold text-center p-2 px-3 hover:scale-105 hover:shadow-md shadow-none hover:shadow-indigo-900 active:scale-90 rounded-full`}
        >
          <FaHandSparkles />
        </Link>
      </div>
    </div>
  );
}
