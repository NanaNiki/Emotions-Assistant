/**
 * The Closure function is a React component that displays a random affirmation or affirmation based on
 * previously selected emotion, with a breathing animation and countdown before transitioning to the
 * next section of the app.
 * @returns A React component is being returned.
 */
import { useState, useEffect } from "react";
import { FaHandSparkles } from "react-icons/fa";
import emotionsData from "../data/emotions.json";

export default function Closure({
  selectedEmotion,
  affirmation,
  setAffirmation,
}) {
  const [countStart, setCountStart] = useState(3);
  const [animationActive, setAnimationActive] = useState(true);
  const [showAffirmation, setShowAffirmation] = useState(false);
  const [hideTimer, setHideTimer] = useState(true);

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
    setHideTimer(false);
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
      className="relative flex h-screen w-screen flex-col items-center overflow-x-hidden"
      id="closure"
    >
      <h1
        className={`${
          affirmation ? "fade-out p-0" : ""
        } animated-item show-up mx-auto w-11/12 p-5 text-center text-lg text-pink-300 delay-[0.5s] sm:w-8/12 sm:text-2xl`}
      >
        As we come full circle in this emotional journey, let's take a moment to
        breathe deeply, find solace and renewed energy to continue our emotional
        growth.
      </h1>
      <div className="mx-auto mb-10 flex w-11/12 flex-row items-center justify-center sm:mb-0 sm:w-8/12">
        {selectedEmotion ? (
          <>
            <span
              className={`${showAffirmation ? "fade-in" : "hidden"}
              absolute top-5 mx-4 mt-5 rounded-3xl p-2 px-4 text-center text-base shadow-md shadow-indigo-600 outline outline-2 outline-indigo-600 delay-500 sm:w-6/12 sm:text-xl`}
            >
              {affirmation}
            </span>
            <button
              onClick={getAffirmation}
              className={`${showAffirmation ? "fade-out" : ""}
            mx-4 mt-5 h-fit w-fit rounded-full px-3 py-2 shadow-md shadow-pink-600 outline outline-2 outline-pink-700 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-900 hover:duration-700 sm:mx-2 sm:text-xl lg:mx-auto`}
            >
              Reveal my affirmation
            </button>
          </>
        ) : (
          <>
            <span
              className={`${showAffirmation ? "fade-in" : "hidden"}
              absolute top-5 mx-4 mt-5 rounded-3xl p-2 px-4 text-center text-base shadow-md shadow-indigo-600 outline outline-2 outline-indigo-600 delay-500 sm:w-6/12 sm:text-xl`}
            >
              {affirmation}
            </span>
            <button
              onClick={getAffirmation}
              className={`${showAffirmation ? "fade-out" : ""} 
              mx-4 mt-5 h-fit w-fit rounded-full px-3 py-2 shadow-md shadow-pink-600 outline outline-2 outline-pink-700 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-900 hover:duration-700 sm:mx-2 sm:text-xl lg:mx-auto`}
            >
              Reveal random affirmation
            </button>
          </>
        )}
        <h1
          className={`absolute right-[48%] text-center text-3xl font-bold sm:text-5xl ${
            countStart === 0 ? "fade-out" : ""
          } ${hideTimer ? "hidden" : "fade-in"}`}
          aria-live="polite"
        >
          {countStart}
        </h1>
        <button
          onClick={handleStartCountDown}
          className={`${hideTimer ? "" : "fade-out"} 
             mx-4 mt-5 h-fit w-fit rounded-full px-3 py-2 shadow-md shadow-pink-600 outline outline-2 outline-pink-700 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-900 hover:duration-700 sm:mx-2 sm:text-xl lg:mx-auto`}
        >
          I am ready to breathe
        </button>
      </div>
      <div className="my-auto flex items-center justify-center pb-32 sm:pb-10">
        <div className="absolute h-[120px] w-[120px] rounded-full bg-indigo-500 sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px]"></div>
        <div
          className={` ${
            countStart === 0 ? "breathe-animation" : ""
          } absolute h-[336px] w-[336px] scale-[0.4] rounded-full bg-indigo-400 bg-opacity-30 opacity-[0.4] hue-rotate-30 sm:h-[420px] sm:w-[420px] md:h-[560px] md:w-[560px]`}
          aria-roledescription="Breathing animation started. Please take 7 slow and deep breaths. Inhaling and exhaling withe ease through your nose."
        ></div>
        <a
          href="#thankyou"
          onClick={handleOkayButton}
          aria-label="Let's go to the final step"
          className={` ${
            animationActive ? "opacity-0" : "fade-in"
          } z-30 rounded-full p-2 px-3 text-center text-4xl font-semibold shadow-none hover:scale-105 hover:shadow-md hover:shadow-indigo-900 active:scale-90 sm:text-5xl`}
        >
          <FaHandSparkles />
        </a>
      </div>
    </div>
  );
}
