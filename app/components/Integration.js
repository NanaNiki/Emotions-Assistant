import data from "../questions.json";
import { useState, useEffect } from "react";

export default function Integration() {
  const [Question, setQuestion] = useState(null);
  const [Thoughts, setThoughts] = useState("");

  const getQuestion = () => {
    let randomNumber = Math.floor(Math.random() * data.questions.length);
    while (randomNumber === Question) {
      randomNumber = Math.floor(Math.random() * data.questions.length);
    }
    setQuestion(data.questions[randomNumber]);
  };

  return (
    <div className="h-screen w-screen flex flex-col" id="integration">
      <h1 className="animated-item show-up delay-[0.5s] text-3xl text-center pt-10 shadow-text">
        Stream of thoughts
      </h1>
      <div className="flex flex-row w-10/12 mx-auto">
        <h1 className="text-lg p-5 w-8/12 text-justify mx-auto">
          Creating a space for a free stream of thoughts is a crucial step in
          the process of integrating emotions. Let your thoughts flow without
          judgment or restriction. It's important to let go of any inhibitions
          or concerns about structure or coherence, and simply allow your
          thoughts to emerge naturally.
        </h1>
        <h1 className="text-lg p-5 w-8/12 text-justify mx-auto">
          Beneath you can see a timer and a space for your thoughts. If you need
          a starter question or you will find yourself stuck feel free to
          generate a new one. Best luck!
        </h1>
      </div>
      {Question ? (
        <div className="flex flex-col w-8/12 mx-auto">
          <div className="flex flex-row justify-center w-full">
            <button
              onClick={getQuestion}
              className="bg-purple-900 rounded-full w-fit h-fit px-3 py-2 text-xl transition-all duration-300 hover:bg-pink-800 active:-hue-rotate-30"
            >
              New Question
            </button>
          </div>
          <span className="bg-indigo-800 rounded-3xl text-center mx-auto mt-5 p-2 text-xl">
            {Question}
          </span>
        </div>
      ) : (
        <button
          onClick={getQuestion}
          className="bg-pink-900 rounded-full w-fit h-fit px-3 py-2 mt-5 mx-auto text-xl hover:bg-purple-900"
        >
          Reveal the question
        </button>
      )}
      <div className="timer"></div>
      <div className="flex flex-col mt-10">
        <input
          type="text"
          onChange={(e) => {
            setThoughts(e.target.value);
          }}
          className="w-[60%] h-[300px] bg-indigo-300 text-indigo-900 mx-auto rounded-3xl"
        ></input>
      </div>
    </div>
  );
}
