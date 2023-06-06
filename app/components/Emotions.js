/**
 * The Emotions function displays animated emojis and a message about emotions, and a button 
 * that allows the user to go to next step, pausing the animation and waiting 1.5s before taking 
 * the user to next step, for the more dramatic effect.
 * @returns A React component that displays a section about emotions with animated emojis and a button
 * to pause the animation, and take the user to the next step.
 */
import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
      router.push("/#selection");
    }, 1500);
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden" id="emotions">
      <h1 className="animated-item show-up delay-[0.5s] md:text-3xl text-2xl text-center sm:pt-20 pt-28 sm:px-0 px-8">
        Sometimes, emotions can be overwhelming...
      </h1>
      <div className="animated-item show-up delay-[1s] relative md:mt-0 mt-36">
        <div className="absolute top-1/3 right-0 flex flex-col text-3xl e-right">
          <BsFillEmojiAngryFill className="emotions-right-animation my-3 " />
          <BsFillEmojiLaughingFill className="emotions-right-animation my-3 absolute right-6 " />
          <BsFillEmojiDizzyFill className=" emotions-right-animation my-3 ms-2 absolute -right-20 " />
          <BsFillEmojiExpressionlessFill className="emotions-right-animation my-3 absolute -right-5 " />
          <BsFillEmojiFrownFill className="emotions-right-animation my-3 " />
          <BsFillEmojiHeartEyesFill className="emotions-right-animation my-3 absolute -right-32 " />
          <BsFillEmojiKissFill className="emotions-right-animation my-3 " />
        </div>
        <div className="absolute top-1/3 left-0 flex flex-col text-3xl e-left">
          <BsFillEmojiLaughingFill className="emotions-left-animation my-3 " />
          <BsFillEmojiNeutralFill className="emotions-left-animation my-3 absolute left-6 " />
          <BsFillEmojiSmileFill className="emotions-left-animation my-3 absolute -left-20 " />
          <BsFillEmojiSmileUpsideDownFill className="emotions-left-animation my-3 absolute -left-5 " />
          <BsFillEmojiSunglassesFill className="emotions-left-animation my-3 " />
          <BsFillEmojiWinkFill className="emotions-left-animation my-3 absolute -left-32 " />
          <BsEmojiAngryFill className="emotions-left-animation my-3 " />
        </div>
      </div>
      <h1 className="sm:mt-52 mt-36 animated-item show-up md:text-3xl text-2xl text-center delay-[3s] sm:px-0 px-8">
        No worries, I'm here to break it down for You!
      </h1>
      <button
        className="animated-item show-up delay-[5s] flex w-screen md:mt-20 mt-40 z-10"
      >
        <GiMeditation
          onClick={() => pauseAnimation()}
          aria-label="Let's go to the selection step"
          className="mx-auto shadow-white shadow-md hover:shadow-purple-300 hover:shadow-md rounded-full w-[7rem] h-[7rem] p-2"
        />
      </button>
    </div>
  );
}
