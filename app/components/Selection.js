/**
 * This is a React component that displays a selection of emotions and allows the user to search for
 * and select an emotion.
 * @returns A React component that renders a selection screen for emotions, including a search bar and
 * a grid of emotion icons to choose from. When an emotion is selected, it sets the selected emotion
 * state and navigates to a section with the id "process". If the entered emotion is not found in the
 * emotionsData array, it shows a pop-up.
 */
import emotionsData from "../emotions.json";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

export default function Selection({ setShowPopUp, setSelectedEmotion }) {
  const router = useRouter();
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
      router.push("/#process");
    } else if (!matchingEmotion) {
      setShowPopUp(true);
    }
  };

  return (
    <>
      <div
        className="h-screen w-screen flex flex-col justify-center overflow-y-hidden sm:py-0 py-5"
        id="selection"
      >
        <h1 className="animated-item show-up delay-[0.5s] sm:text-3xl text-2xl text-center px-8">
          Please select one emotion You are feeling right now.
        </h1>
        <div className="flex sm:flex-row flex-col py-8 justify-center align-middle mx-auto">
          <h1 className="sm:text-3xl text-2xl sm:mx-0 mx-auto sm:mb-0 mb-2">Today I am feeling</h1>
          <div className="flex flex-row">
          <form onSubmit={handleFormSubmit} className="mx-4">
            <input
              type="text"
              placeholder="emotion"
              value={searchEmotion}
              onChange={(e) => {
                setSearchEmotion(e.target.value);
              }}
              className="rounded-full ps-2 py-1 text-base text-indigo-950"
            ></input>
          </form>
          <button
            type="submit"
            onClick={handleFormSubmit}
            aria-label="Confirm your choice"
            className="p-1 h-8 text-2xl rounded-full shadow-white shadow-sm hover:shadow-purple-300 hover:text-purple-300"
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

        <div className="grid sm:grid-cols-6 grid-cols-3 px-5 w-fit mx-auto overflow-y-scroll ">
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
                  onClick={() => setSearchEmotion(emotion.name.toLowerCase())}
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
    </>
  );
}
