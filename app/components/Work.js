/**
 * This is a React component that displays information about a selected emotion and provides options
 * for working with that emotion.
 * @returns This code exports a React component called "Work" that returns a JSX element. The returned
 * JSX element contains conditional rendering based on whether a selectedEmotion prop is passed to the
 * component or not. If selectedEmotion is null, a message is displayed prompting the user to go back
 * to the selection page. If selectedEmotion is not null, information about the selected emotion is
 * displayed, including its name, description, how to feel and express the emoiton, as well as end note.
 */
import Link from "next/link";
import { useState } from "react";
import { GiBrain } from "react-icons/gi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function Work({ selectedEmotion }) {
  const [slideDown, setSlideDown] = useState(false);

  return (
    <div className="lg:h-screen h-fit w-screen" id="work">
      {selectedEmotion === null ? (
        <div className="animated-item show-up md:w-fit h-fit w-10/12 mt-32 mx-auto items-center flex">
          <Link
            href={"#selection"}
            className="text-center sm:text-3xl text-xl p-2 text-pink-200 shadow-md rounded-full shadow-pink-600 transition-all duration-700 hover:bg-pink-700 hover:shadow-purple-900"
          >
            Emotion not selcted. Please go back to Selection.
          </Link>
        </div>
      ) : (
        <>
          <h1 className="sm:text-3xl text-xl text-center sm:pt-12 pt-6">
            Let's work on:{" "}
            <span className="shadow-text font-bold">
              {selectedEmotion.name}
            </span>
          </h1>
          <h1 className="md:text-xl sm:text-lg text-sm sm:px-5 py-5 sm:w-8/12 w-10/12 h-fit font-bold text-justify mx-auto">
            {selectedEmotion.text}
          </h1>
          <div className="flex sm:flex-row flex-col sm:w-10/12 w-11/12 mx-auto overflow-y-scroll">
            <div onMouseLeave={() => setSlideDown(true)}
            className="has-animation relative flex flex-col sm:m-5  bg-indigo-500 rounded-3xl">
              <h1 className="md:text-base text-sm p-5 text-indigo-100 selection:bg-pink-600 selection:text-pink-100">
                {selectedEmotion.feel}
              </h1>
              <div
                className={`${slideDown ? "slidedown-animation" : ""} slideup-animation absolute inset-[3px] flex flex-col justify-center bg-slate-900 rounded-3xl cursor-pointer outline outline-indigo-500 outline-1 `}
              >
                <h1 className="text-2xl text-center py-3 font-bold shadow-text">
                  How to feel it?
                </h1>
              </div>
            </div>
            <div onMouseLeave={() => setSlideDown(true)}
             className="has-animation relative flex flex-col sm:m-5 mt-5 bg-indigo-500 rounded-3xl overflow-hidden" >
              <h1 className="md:text-base text-sm p-5 text-indigo-100 selection:bg-pink-600 selection:text-pink-100">
                {selectedEmotion.express}
              </h1>
              <div
                className={`${slideDown ? "slidedown-animation" : ""} slideup-animation absolute inset-[3px] flex flex-col justify-center bg-slate-900 rounded-3xl cursor-pointer outline outline-indigo-500 outline-1 `}
              >
                <h1 className="text-2xl text-center py-3 font-bold shadow-text">
                  How to express it?
                </h1>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col sm:w-10/12 mx-auto mt-5 justify-around">
            <div className="h-fit mx-4 sm:rounded-full rounded-3xl outline outline-2 outline-pink-700 shadow transition duration-1000 hover:bg-pink-900 hover:shadow-lg hover:shadow-pink-900 ">
              <h1 className="sm:px-10 px-4 py-4 text-justify text-pink-300">
                {selectedEmotion.note}
              </h1>
            </div>
            <div className="flex flex-col md:mx-3 md:mt-0 mx-auto mt-6 justify-center text-5xl text-pink-700 transition duration-500 hover:-hue-rotate-30">
              <Link href={"#integration"}>
                <GiBrain />
                <HiOutlineChevronDoubleDown />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
