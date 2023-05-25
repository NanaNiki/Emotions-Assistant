import { Caveat } from "next/font/google";
import { BsFillTelephoneFill, BsFillChatTextFill } from "react-icons/bs";
import { GiHeartInside, GiBrain } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import Link from "next/link";
import { useEffect } from "react";
import { observeScroll } from "../page";

const caveat = Caveat({ subsets: ["latin-ext"], weight: ["400"] });

export default function Thankyou() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col" id="thankyou">
      <h1 className="animated-item show-up text-4xl text-center mt-10 shadow-text">
        Ok!
      </h1>
      <div className="flex flex-col w-8/12 mx-auto mt-5">
        <h1 className="w-9/12 animated-item show-up text-xl py-5 text-justify mx-auto text-pink-200">
          I hope today's process helped you navigate your emotional experience!
          As your Emotional Assistant, my role concludes here. Take a moment to
          acknowledge the work you've done today.
        </h1>
        <div className="flex flex-row mt-3">
          <GiBrain className="flex flex-col ms-10 justify-end text-5xl text-pink-700" />
          <div className="animated-item slide-in-left delay-[2s] w-9/12 h-[1px] bg-pink-700 shadow-md shadow-pink-400 m-auto"></div>
          <GiHeartInside className="flex flex-col me-10 justify-end text-5xl text-pink-700" />
        </div>

        <div className="flex flex-row mt-10">
          <h1 className="w-8/12 px-5 py-3 animated-item show-up delay-[4s] text-xl text-justify font-bold mx-auto">
            Remember, this app is not a substitute for professional help. It's
            important to seek the guidance of qualified professionals who can
            provide personalized support for your well-being. You're not alone
            in this journey, and there are resources available to provide the
            support and care you deserve.
          </h1>
          <div className="flex flex-col text-xl font-bold text-indigo-400 animated-item show-up delay-[8s]">
            <Link
              href={"https://buddyhelp.org/chat/"}
              passHref={true}
              target="_blank"
              className="flex flex-row hover:text-pink-400 hover:scale-105 p-3"
            >
              <BsFillChatTextFill className="me-3 text-3xl" />{" "}
              <h1>Chat with a Volunteer Listener</h1>
            </Link>
            <Link
              href={"https://befrienders.org/find-support-now/"}
              passHref={true}
              target="_blank"
              className="flex flex-row hover:text-pink-400 hover:scale-105 p-3"
            >
              <RiMentalHealthFill className="me-3 text-3xl" />{" "}
              <h1>Find support now</h1>
            </Link>
            <Link
              href={"https://blog.opencounseling.com/suicide-hotlines/"}
              passHref={true}
              target="_blank"
              className="flex flex-row hover:text-pink-400 hover:scale-105 p-3"
            >
              <BsFillTelephoneFill className="me-3 text-3xl" />{" "}
              <h1>International Suicide Hotlines</h1>
            </Link>
          </div>
        </div>

        <div
          className={`${caveat.className} animated-item show-up delay-[11s] text-5xl text-center mt-3`}
        >
          <h1>Keep feelin'!</h1>
          <h1>Keep livin'!</h1>
        </div>
        <div className="flex flex-row mt-10 justify-center text-2xl text-pink-200">
          <button
            onClick={() => window.location.reload()}
            className="outline outline-2 outline-pink-600 rounded-full w-fit h-fit px-3 py-2 mx-2 shadow-md shadow-pink-600 transition-all duration-500 active:-hue-rotate-30 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950"
          >
            Start a new process
          </button>
          <button className="outline outline-2 outline-pink-600 rounded-full w-fit h-fit px-3 py-2 mx-2 shadow-md shadow-pink-600 transition-all duration-500 active:-hue-rotate-30 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950">
            Get my report
          </button>
        </div>
      </div>
    </div>
  );
}
