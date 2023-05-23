import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GiBrain } from "react-icons/gi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function Work({ selectedEmotion }) {
  const [slideDown, setSlideDown] = useState(false);

  return (
    <div className="h-screen w-screen" id="work">
      {selectedEmotion === null ? (
        <div className="animated-item show-up w-fit h-fit mt-20 mx-auto items-center flex">
          <Link
            href={"#selection"}
            className="text-center text-3xl p-2 text-pink-200 shadow-md rounded-full shadow-pink-600 transition-all duration-700 hover:bg-pink-700 hover:shadow-purple-900"
          >
            Emotion not selcted. Please go back to Selection.
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-3xl text-center pt-12">
            Let's work on:{" "}
            <span className="shadow-text font-bold">
              {selectedEmotion.name}
            </span>
          </h1>
          <h1 className="text-xl p-5 w-8/12 font-bold text-justify mx-auto">
            {selectedEmotion.text}
          </h1>
          <div className="flex flex-row w-10/12 mx-auto">
            <div onMouseLeave={() => setSlideDown(true)}
            className="has-animation relative flex flex-col m-5 bg-indigo-500 rounded-3xl overflow-hidden">
              <h1 className="text-base p-5 text-indigo-100 selection:bg-pink-600 selection:text-pink-100">
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
             className="has-animation relative flex flex-col m-5 bg-indigo-500 rounded-3xl overflow-hidden" >
              <h1 className="text-base p-5 text-indigo-100 selection:bg-pink-600 selection:text-pink-100">
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
          <div className="flex flex-row w-10/12 mx-auto mt-5 justify-around">
            <div className="h-fit mx-4 rounded-full outline outline-2 outline-pink-700 shadow transition duration-1000 hover:bg-pink-900 hover:shadow-lg hover:shadow-pink-900 ">
              <h1 className="px-10 py-4 text-justify text-pink-300">
                {selectedEmotion.note}
              </h1>
            </div>
            <div className="flex flex-col mx-3 justify-center text-5xl text-pink-700 transition duration-500 hover:-hue-rotate-30">
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
