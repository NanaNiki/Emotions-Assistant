/**
 * The Emotions function displays animated emojis and a message about emotions, and a button
 * that allows the user to go to next step, pausing the animation and waiting 1.5s before taking
 * the user to next step, for the more dramatic effect.
 * @returns A React component that displays a section about emotions with animated emojis and a button
 * to pause the animation, and take the user to the next step.
 */
import { useEffect } from "react";
import { observeScroll } from "../page";
import {
  BsFillEmojiAngryFill,
  BsFillEmojiDizzyFill,
  BsFillEmojiExpressionlessFill,
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiKissFill,
  BsFillEmojiLaughingFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
  BsFillEmojiSmileUpsideDownFill,
  BsFillEmojiSunglassesFill,
  BsFillEmojiWinkFill,
  BsEmojiAngryFill,
} from "react-icons/bs";
import { GiMeditation } from "react-icons/gi";

export default function Emotions() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  const pauseAnimation = () => {
    const elements = document.querySelectorAll(
      ".emotions-right-animation, .emotions-left-animation"
    );
    elements.forEach((element) => {
      element.classList.add("pause");
    });

    setTimeout(() => {
      window.location.hash = "selection";
    }, 1500);
  };

  return (
    <div
      className="h-screen w-screen overflow-x-hidden overflow-y-hidden sm:overflow-y-visible"
      id="emotions"
    >
      <h1 className="animated-item show-up px-8 pt-10 text-center text-2xl delay-[0.5s] sm:px-0 sm:pt-20 md:text-3xl">
        Sometimes, emotions can be overwhelming...
      </h1>
      <div className="animated-item show-up relative mt-36 delay-[1s] md:mt-0">
        <div className="e-right absolute right-0 top-1/3 flex flex-col text-3xl">
          <BsFillEmojiAngryFill className="emotions-right-animation my-3 " />
          <BsFillEmojiLaughingFill className="emotions-right-animation absolute right-6 my-3 " />
          <BsFillEmojiDizzyFill className=" emotions-right-animation absolute -right-20 my-3 ms-2 " />
          <BsFillEmojiExpressionlessFill className="emotions-right-animation absolute -right-5 my-3 " />
          <BsFillEmojiFrownFill className="emotions-right-animation my-3 " />
          <BsFillEmojiHeartEyesFill className="emotions-right-animation absolute -right-32 my-3 " />
          <BsFillEmojiKissFill className="emotions-right-animation my-3 " />
        </div>
        <div className="e-left absolute left-0 top-1/3 flex flex-col text-3xl">
          <BsFillEmojiLaughingFill className="emotions-left-animation my-3 " />
          <BsFillEmojiNeutralFill className="emotions-left-animation absolute left-6 my-3 " />
          <BsFillEmojiSmileFill className="emotions-left-animation absolute -left-20 my-3 " />
          <BsFillEmojiSmileUpsideDownFill className="emotions-left-animation absolute -left-5 my-3 " />
          <BsFillEmojiSunglassesFill className="emotions-left-animation my-3 " />
          <BsFillEmojiWinkFill className="emotions-left-animation absolute -left-32 my-3 " />
          <BsEmojiAngryFill className="emotions-left-animation my-3 " />
        </div>
      </div>
      <h1 className="animated-item show-up mt-36 px-8 text-center text-2xl delay-[3s] sm:mt-52 sm:px-0 md:text-3xl">
        No worries, I'm here to break it down for You!
      </h1>
      <button className="animated-item show-up z-10 mt-36 flex w-screen delay-[5s] md:mt-20">
        <GiMeditation
          onClick={() => pauseAnimation()}
          aria-label="Let's go to the selection step"
          className="mx-auto h-[7rem] w-[7rem] rounded-full p-2 shadow-md shadow-white hover:shadow-md hover:shadow-purple-300"
        />
      </button>
    </div>
  );
}
