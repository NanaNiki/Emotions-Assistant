/**
 * This is a React component that displays a selection of emotions and allows the user to search for
 * and select an emotion.
 * @returns A React component that renders a selection screen for emotions, including a search bar and
 * a grid of emotion icons to choose from. When an emotion is selected, it sets the selected emotion
 * state and navigates to a section with the id "process". If the entered emotion is not found in the
 * emotionsData array, it shows a pop-up.
 */
import emotionsData from "../data/emotions.json";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

export default function Selection({ setShowPopUp, setSelectedEmotion }) {
  const [searchEmotion, setSearchEmotion] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const matchingEmotion = emotionsData.find(
      (emotion) => emotion.name.toLowerCase() === searchEmotion.toLowerCase()
    );
    if (matchingEmotion) {
      setSelectedEmotion(matchingEmotion);
      setSearchEmotion(matchingEmotion.name.toLowerCase());
      console.log(matchingEmotion.name);
      window.location.hash = "process";
    } else if (!matchingEmotion) {
      setShowPopUp(true);
    }
  };

  return (
    <>
      <div
        className="flex h-screen w-screen flex-col justify-center overflow-y-hidden py-5 sm:py-0"
        id="selection"
      >
        <h1 className="animated-item show-up px-8 text-center text-2xl delay-[0.5s] sm:text-3xl">
          Please select one emotion You are feeling right now.
        </h1>
        <div className="mx-auto flex flex-col justify-center py-8 align-middle sm:flex-row">
          <h1 className="mx-auto mb-2 text-2xl sm:mx-0 sm:mb-0 sm:text-3xl">
            Today I am feeling
          </h1>
          <div className="flex flex-row">
            <form onSubmit={handleFormSubmit} className="mx-4">
              <input
                type="text"
                placeholder="emotion"
                value={searchEmotion}
                onChange={(e) => {
                  setSearchEmotion(e.target.value);
                }}
                className="rounded-full py-1 ps-2 text-base text-indigo-950"
              ></input>
            </form>
            <button
              type="submit"
              onClick={handleFormSubmit}
              aria-label="Confirm your choice"
              className="h-8 rounded-full p-1 text-2xl shadow-sm shadow-white hover:text-purple-300 hover:shadow-purple-300"
            >
              <BsCheckLg />
            </button>
          </div>
        </div>

        {/** LEARNING NOTE       
          * emotion.name.substring(0, searchEmotion.length): 
          This line extracts a substring from the emotion.name starting at index 0 and with a length equal to the length of the searchEmotion. 
          It ensures that we only compare the portion of the emotion name that matches the length of the search input.
          * index < searchEmotion.length: 
          This condition ensures that only the letters up to the length of the searchEmotion are marked. 
          It restricts the marking to the characters that have been typed in the search input. */}

        <div className="mx-auto grid w-fit grid-cols-3 overflow-y-scroll px-5 sm:grid-cols-6 ">
          {emotionsData.map((emotion) => {
            const markedName = emotion.name.split("").map((letter, index) => {
              const isSelected =
                searchEmotion.toLowerCase() ===
                  emotion.name
                    .substring(0, searchEmotion.length)
                    .toLowerCase() && index < searchEmotion.length;
              return (
                <span
                  key={index}
                  className={`${isSelected ? "font-bold text-white" : ""}`}
                >
                  {letter}
                </span>
              );
            });
            return (
              <div key={emotion.id} className="my-2 flex flex-col items-center">
                <button
                  className="hover:scale-105 hover:text-white focus:animate-bounce"
                  onClick={() => setSearchEmotion(emotion.name.toLowerCase())}
                >
                  <h1 className="mx-auto mb-2 text-2xl">{emotion.icon}</h1>
                  <h1 className="text-sm text-indigo-300 opacity-60">
                    {markedName}
                  </h1>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
