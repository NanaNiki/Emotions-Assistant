/**
 * The Integration function is a React component that displays a timer and a space for users to write
 * their thoughts, with the option to generate a random question as a prompt.
 * @returns The code exports a React component named "Integration" that renders a page with a timer, a
 * space for the user's thoughts, and a button to generate a random question. The component also
 * includes functions to handle the timer, generate a new question, and format the time. The component
 * receives a prop named "setThoughts" that is used to update the state of the user's thoughts.
 */
import data from "../questions.json";
import { observeScroll } from "../page";
import { useState, useRef, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlinePause } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import { RiEyeCloseFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { GiHeartInside } from "react-icons/gi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function Integration({setThoughts}) {
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
    <div className="lg:h-screen h-fit w-screen flex flex-col" id="integration">
      <h1 className="animated-item show-up delay-[1s] text-3xl text-center sm:pt-16 pt-6 shadow-text">
        Stream of thoughts
      </h1>
      <div className="flex sm:flex-row flex-col sm:w-10/12 w-11/12 mx-auto">
        <div className="flex flex-col sm:w-8/12 w-full">
          <h1 className="animated-item show-up delay-[0.5s] sm:text-lg text-sm p-5 sm:pb-5 pb-0 text-justify mx-auto text-pink-200">
            Creating a space for a free stream of thoughts is a crucial step in
            the process of integrating emotions. Let your thoughts flow without
            judgment or restriction. It's important to let go of any inhibitions
            or concerns about structure or coherence, and simply allow your
            thoughts to emerge naturally.
          </h1>
        </div>
        <div className="animated-item show-up delay-[0.5s] flex flex-col sm:w-8/12 w-full">
          <h1 className="sm:text-lg text-sm p-5 text-justify mx-auto text-indigo-200">
            Beneath you can see a timer and a space for your thoughts. If you
            need a starter question or you will find yourself stuck, feel free
            to generate a new one. Best luck!
          </h1>
          <div className="flex flex-row md:w-6/12 w-10/12 mx-auto">
            <div
              className={` ${
                hideTimer ? "fade-out" : "fade-in"
              } flex flex-row text-3xl rounded-full mx-auto p-2 text-indigo-800 outline outline-2 outline-indigo-700 `}
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
                } text-indigo-300 w-16`}
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
              <button onClick={startTimer} className="hover:hue-rotate-30 mx-2">
                {timerOn ? <AiOutlinePause aria-label="Pause" /> : <FiPlay aria-label="Play" />}
              </button>
              <audio ref={audioRef} src="/_Alarm04.mp3"></audio>
            </div>
            <button onClick={toogleTimerVisibility} className="mx-4 text-4xl">
              {hideTimer ? (
                <RiEyeCloseFill className="transition-all duration-500 text-purple-900 hover:text-purple-400" aria-label="Hide timer"/>
              ) : (
                <FaEye className="text-indigo-800 transition-all duration-500 hover:text-indigo-400" aria-label="Show itmer"/>
              )}
            </button>
          </div>
        </div>
      </div>
      {question ? (
        <div className="flex flex-col md:w-8/12 w-10/12 mx-auto sm:mt-0 mt-5">
          <div className="flex flex-row justify-center w-full">
            <button
              onClick={getQuestion}
              className="outline outline-2 outline-pink-600 rounded-full w-fit h-fit px-3 py-2 sm:text-xl text-pink-200 shadow-md shadow-pink-600 transition-all duration-500 active:-hue-rotate-30 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950"
            >
              New Question
            </button>
          </div>
          <span className="outline outline-2 outline-indigo-600 shadow-md shadow-indigo-600 rounded-3xl text-center text-indigo-200 mx-auto mt-5 p-2 px-3 sm:text-xl text-base">
            {question}
          </span>
        </div>
      ) : (
        <button
          onClick={getQuestion}
          className="outline outline-2 outline-pink-700 rounded-full w-fit h-fit px-3 py-2 mt-5 mx-auto sm:text-xl shadow-md shadow-pink-600 transition duration-700 hover:text-pink-500 hover:shadow-lg hover:shadow-pink-900"
        >
          Reveal the question
        </button>
      )}
      <div className="flex md:flex-row flex-col sm:mt-10 mt-5 justify-center w-11/12 mx-auto">
        <textarea
          onChange={(e) => {
            setThoughts(e.target.value);
          }}
          className="md:w-[70%] md:h-[300px] w-[95%] h-[400px] p-5 bg-indigo-300 text-indigo-900 rounded-3xl md:ms-16 md:mx-0 mx-auto resize-none"
        aria-label="field for reflections"></textarea>
        <div className="flex flex-col md:ms-10 md:mx-0 mx-auto md:mt-0 mt-5 justify-end sm:text-5xl text-4xl text-pink-700 transition duration-500 hover:-hue-rotate-30">
          <a href="#closure" aria-label="Let's go to the breathing excercise">
            <GiHeartInside />
            <HiOutlineChevronDoubleDown />
          </a>
        </div>
      </div>
    </div>
  );
}
