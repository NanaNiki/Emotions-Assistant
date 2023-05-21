import { useEffect, useState } from "react";
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
  const [animationPaused, setAnimationPaused] = useState(false);

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
    setAnimationPaused(true);

    setTimeout(() => {
      router.push("#selection");
    }, 1500);
  };

  return (
    <div className="h-screen w-screen" id="emotions">
      <h1 className="animated-item show-up delay-[1s] text-3xl text-center pt-20">
        Sometimes, emotions can be overwhelming...
      </h1>
      <div className="animated-item show-up delay-[1s] relative">
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
      <h1 className="mt-52 animated-item show-up text-3xl text-center delay-[3s]">
        No worries, I'm here to break it down for You!
      </h1>
      <button
        className={`animated-item show-up delay-[5s] flex w-screen mt-20 z-10 ${
          animationPaused ? "pointer-event-none" : ""
        }`}
      >
        <GiMeditation
          onClick={() => pauseAnimation()}
          className="mx-auto shadow-white shadow-md hover:shadow-purple-300 hover:shadow-md rounded-full w-[7rem] h-[7rem] p-2"
        />
      </button>
    </div>
  );
}
