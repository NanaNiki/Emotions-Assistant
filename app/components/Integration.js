/**
 * The Integration function is a React component that displays a timer and a space for users to write
 * their thoughts, with the option to generate a random question as a prompt.
 * @returns The code exports a React component named "Integration" that renders a page with a timer, a
 * space for the user's thoughts, and a button to generate a random question. The component also
 * includes functions to handle the timer, generate a new question, and format the time. The component
 * receives a prop named "setThoughts" that is used to update the state of the user's thoughts.
 */
import data from "../data/questions.json";
import { observeScroll } from "../page";
import { useState, useRef, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlinePause } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import { RiEyeCloseFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { GiHeartInside } from "react-icons/gi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function Integration({ setThoughts }) {
  const audioRef = useRef(null);
  const [question, setQuestion] = useState(null);
  const [displayTime, setDisplayTime] = useState(7 * 60);
  const [sessionLength, setSessionLength] = useState(7);
  const [timerOn, setTimerOn] = useState(false);
  const [hideTimer, setHideTimer] = useState(false);

  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  const getQuestion = () => {
    let randomNumber = Math.floor(Math.random() * data.questions.length);
    while (randomNumber === question) {
      randomNumber = Math.floor(Math.random() * data.questions.length);
    }
    setQuestion(data.questions[randomNumber]);
  };

  const timeFormat = (time) => {
    let minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    let seconds = (time % 60).toString().padStart(2, "0");
    return minutes + ":" + seconds;
  };

  const handleIncrementDecrement = (amount) => {
    if (
      (sessionLength <= 3 && amount < 1) ||
      (sessionLength >= 15 && amount === 1)
    ) {
      return;
    }
    setSessionLength((prev) => prev + amount);
    setDisplayTime((sessionLength + amount) * 60);
  };

  const startTimer = () => {
    if (timerOn) {
      clearInterval(timerOn);
      setTimerOn(false);
    } else if (!timerOn) {
      let interval = setInterval(() => {
        setDisplayTime((prev) => {
          if (prev === 0) {
            playAudio();
            clearInterval(interval);
            setHideTimer(false);
            return prev;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
      setTimerOn(interval);
    }
  };

  const playAudio = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const toogleTimerVisibility = () => {
    setHideTimer(!hideTimer);
  };

  return (
    <div className="flex h-fit w-screen flex-col lg:h-screen" id="integration">
      <h1 className="animated-item show-up shadow-text pt-6 text-center text-3xl delay-[1s] sm:pt-16">
        Stream of thoughts
      </h1>
      <div className="mx-auto flex w-11/12 flex-col sm:w-10/12 sm:flex-row">
        <div className="flex w-full flex-col sm:w-8/12">
          <h1 className="animated-item show-up mx-auto p-5 pb-0 text-justify text-sm text-pink-200 delay-[0.5s] sm:pb-5 sm:text-lg">
            Creating a space for a free stream of thoughts is a crucial step in
            the process of integrating emotions. Let your thoughts flow without
            judgment or restriction. It's important to let go of any inhibitions
            or concerns about structure or coherence, and simply allow your
            thoughts to emerge naturally.
          </h1>
        </div>
        <div className="animated-item show-up flex w-full flex-col delay-[0.5s] sm:w-8/12">
          <h1 className="mx-auto p-5 text-justify text-sm text-indigo-200 sm:text-lg">
            Beneath you can see a timer and a space for your thoughts. If you
            need a starter question or you will find yourself stuck, feel free
            to generate a new one. Best luck!
          </h1>
          <div className="mx-auto flex w-10/12 flex-row md:w-6/12">
            <div
              className={` ${
                hideTimer ? "fade-out" : "fade-in"
              } mx-auto flex flex-row rounded-full p-2 text-3xl text-indigo-800 outline outline-2 outline-indigo-700 `}
            >
              <button
                onClick={() => handleIncrementDecrement(1)}
                aria-label="Add one more minute"
                className="mx-2 text-3xl hover:-hue-rotate-60"
              >
                <AiOutlinePlus />
              </button>
              <div
                className={` ${
                  displayTime === 0 ? "animate-pulse" : ""
                } w-16 text-indigo-300`}
              >
                {timeFormat(displayTime)}
              </div>
              <button
                onClick={() => handleIncrementDecrement(-1)}
                aria-label="Remove one minute"
                className="ms-5 hover:hue-rotate-60"
              >
                <AiOutlineMinus />
              </button>
              <button onClick={startTimer} className="mx-2 hover:hue-rotate-30">
                {timerOn ? (
                  <AiOutlinePause aria-label="Pause" />
                ) : (
                  <FiPlay aria-label="Play" />
                )}
              </button>
              <audio ref={audioRef} src="/_Alarm04.mp3"></audio>
            </div>
            <button onClick={toogleTimerVisibility} className="mx-4 text-4xl">
              {hideTimer ? (
                <RiEyeCloseFill
                  className="text-purple-900 transition-all duration-500 hover:text-purple-400"
                  aria-label="Hide timer"
                />
              ) : (
                <FaEye
                  className="text-indigo-800 transition-all duration-500 hover:text-indigo-400"
                  aria-label="Show itmer"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {question ? (
        <div className="mx-auto mt-5 flex w-10/12 flex-col sm:mt-0 md:w-8/12">
          <div className="flex w-full flex-row justify-center">
            <button
              onClick={getQuestion}
              className="h-fit w-fit rounded-full px-3 py-2 text-pink-200 shadow-md shadow-pink-600 outline outline-2 outline-pink-600 transition-all duration-500 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950 active:-hue-rotate-30 sm:text-xl"
            >
              New Question
            </button>
          </div>
          <span className="mx-auto mt-5 rounded-3xl p-2 px-3 text-center text-base text-indigo-200 shadow-md shadow-indigo-600 outline outline-2 outline-indigo-600 sm:text-xl">
            {question}
          </span>
        </div>
      ) : (
        <button
          onClick={getQuestion}
          className="mx-auto mt-5 h-fit w-fit rounded-full px-3 py-2 shadow-md shadow-pink-600 outline outline-2 outline-pink-700 transition duration-700 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-900 sm:text-xl"
        >
          Reveal the question
        </button>
      )}
      <div className="mx-auto mt-5 flex w-11/12 flex-col justify-center sm:mt-10 md:flex-row">
        <textarea
          onChange={(e) => {
            setThoughts(e.target.value);
          }}
          className="mx-auto h-[400px] w-[95%] resize-none rounded-3xl bg-indigo-300 p-5 text-indigo-900 md:mx-0 md:ms-16 md:h-[300px] md:w-[70%]"
          aria-label="field for reflections"
        ></textarea>
        <div className="mx-auto mt-5 flex flex-col justify-end text-4xl text-pink-700 transition duration-500 hover:-hue-rotate-30 sm:text-5xl md:mx-0 md:ms-10 md:mt-0">
          <a href="#closure" aria-label="Let's go to the breathing excercise">
            <GiHeartInside />
            <HiOutlineChevronDoubleDown />
          </a>
        </div>
      </div>
    </div>
  );
}
