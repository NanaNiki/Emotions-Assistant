import emotionsData from "../emotions.json";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import Link from "next/link";

export default function Selection() {
  const [searchEmotion, setSearchEmotion] = useState("");

  const handleInputChange = (e) => {
    setSearchEmotion(e.target.value);
  };

  const handleClick = (emotionName) => {
    setSearchEmotion(emotionName.toLowerCase());
    console.log(emotionName);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   setSearchEmotion(emotionName.toLowerCase());
  //   console.log(emotionName);
  // };

  return (
    <div className="h-screen w-screen" id="selection">
      <h1 className="animated-item show-up delay-[0.5s] text-3xl text-center mt-10">
        Please select <span> one</span> emotion You are feeling right now.
      </h1>
      <div className="flex flex-row py-8 justify-center align-middle">
        <h1 className="text-3xl">Today I am feeling</h1>
        <form onSubmit={handleFormSubmit} className="mx-4">
          <input
            type="text"
            placeholder="emotion"
            value={searchEmotion}
            onChange={handleInputChange}
            className="rounded-full ps-2 py-1 text-base text-indigo-950"
          ></input>
        </form>
        <Link href={"#process"} passHref={true}>
          <button
            type="submit"
            className="p-1 h-8 text-2xl rounded-full shadow-white shadow-sm hover:shadow-purple-300 hover:text-purple-300"
          >
            <BsCheckLg />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-6 px-5 w-fit mx-auto">
        {emotionsData.map((emotion) => {
          const markedName = emotion.name.split("").map((letter, index) => {
            const isSelected =
              searchEmotion.toLowerCase() ===
                emotion.name.substring(0, searchEmotion.length).toLowerCase() &&
              index < searchEmotion.length;
            return (
              <span
                key={index}
                className={`${isSelected ? "text-white font-bold" : ""}`}
              >
                {letter}
              </span>
            );
          });
          return (
            <div key={emotion.id} className="flex flex-col items-center my-2">
              <button
                className="hover:scale-105 hover:text-white focus:animate-bounce"
                onClick={() => handleClick(emotion.name)}
              >
                <h1 className="text-2xl mx-auto mb-2">{emotion.icon}</h1>
                <h1 className="text-sm opacity-60 text-indigo-300">
                  {markedName}
                </h1>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}