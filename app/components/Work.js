import emotionsData from "../emotions.json";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Work() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  useEffect(() => {
    const storedEmotion = localStorage.getItem("selectedEmotion");
    if (storedEmotion) {
      setSelectedEmotion(JSON.parse(storedEmotion));
    }
  }, []);

  return (
    <div className="h-screen w-screen" id="work">
      {selectedEmotion ? (
        <>
          <h1 className="animated-item show-up delay-[0.5s] text-3xl text-center pt-10">
            Let's work on:{" "}
            <span className="shadow-text font-bold">{selectedEmotion.name}</span>
          </h1>
          <h1 className="text-xl p-5 w-8/12 text-justify mx-auto">
            {selectedEmotion.text}
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-col m-5 bg-purple-900 rounded-3xl">
              <h1 className=" text-2xl text-center my-2 shadow-text">
                How to feel it?
              </h1>
              <h1 className=" text-lg px-5 pb-2 text-purple-200">
                {selectedEmotion.feel}
              </h1>
            </div>
            <div className="flex flex-col m-5 bg-indigo-900 rounded-3xl">
              <h1 className="text-2xl text-center my-2 shadow-text">
                How to express it?
              </h1>
              <h1 className=" text-lg px-5 pb-2 text-indigo-200">
                {selectedEmotion.express}
              </h1>
            </div>
            </div>
            <div className="w-8/12 h-fit bg-pink-900 rounded-full mx-auto mt-5">
              <h1 className="px-12 py-4 text-justify text-pink-300">{selectedEmotion.note}</h1>
            </div>
        </>
      ) : (
        <div className="w-fit h-fit mt-20 mx-auto items-center flex">
          <Link
            href={"#selection"}
            className="text-center text-3xl p-2 text-pink-200 shadow-md rounded-full shadow-pink-600 transition-all duration-700 hover:bg-pink-700 hover:shadow-purple-900"
          >
            Emotion not selcted. Please go back to Selection.
          </Link>
        </div>
      )}
    </div>
  );
}
