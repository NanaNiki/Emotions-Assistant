/**
 * The Thankyou function is a React component that displays a message of gratitude and provides
 * resources for seeking professional help, as well as options to start a new emotional process or
 * download a report generated from app-data in pdf form.
 * @returns A React component is being returned.
 */
import { Caveat } from "next/font/google";
import { BsFillTelephoneFill, BsFillChatTextFill } from "react-icons/bs";
import { GiHeartInside, GiBrain } from "react-icons/gi";
import { RiMentalHealthFill, RiCopyrightLine } from "react-icons/ri";
import { HiHeart } from "react-icons/hi";
import Link from "next/link";
import { useEffect } from "react";
import { observeScroll } from "../page";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useRouter } from "next/navigation";
import YourReport from "./YourReport.js";

const caveat = Caveat({
  subsets: ["latin-ext"],
  weight: ["400"],
  preload: false,
});

export default function Thankyou({ selectedEmotion, thoughts, affirmation }) {
  const router = useRouter();
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  return (
    <div
      className="relative flex h-fit w-screen flex-col justify-evenly sm:h-screen"
      id="thankyou"
    >
      <h1 className="animated-item show-up shadow-text mt-5 text-center text-4xl md:mt-10">
        Ok!
      </h1>
      <div className="mx-auto mt-3 flex w-10/12 flex-col md:mt-5 md:w-8/12">
        <h1 className="animated-item show-up mx-auto py-5 text-justify text-pink-200 sm:w-9/12 sm:text-xl">
          I hope today's process helped you navigate your emotional experience!
          As your Emotional Assistant, my role concludes here. Take a moment to
          acknowledge the work you've done today.
        </h1>
        <div className="mt-0 flex flex-row md:mt-3">
          <GiBrain className="ms-10 flex flex-col justify-end text-5xl text-pink-700" />
          <div className="animated-item slide-in-left m-auto h-[1px] w-9/12 bg-pink-700 shadow-md shadow-pink-400 delay-[3s]"></div>
          <GiHeartInside className="me-10 flex flex-col justify-end text-5xl text-pink-700" />
        </div>

        <div className="mt-3 flex flex-col md:mt-10 md:flex-row">
          <h1 className="animated-item show-up mx-auto py-3 text-justify font-bold delay-[5s] sm:px-5 sm:text-xl md:w-8/12">
            Remember, this app is not a substitute for professional help. It's
            important to seek the guidance of qualified professionals who can
            provide personalized support for your well-being. You're not alone
            in this journey, and there are resources available to provide the
            support and care you deserve.
          </h1>
          <div className="animated-item show-up mx-auto flex flex-col text-base font-bold text-indigo-400 delay-[7s] sm:my-3 sm:text-xl sm:delay-[8s] md:mx-0 md:my-0">
            <Link
              href={"https://buddyhelp.org/chat/"}
              passHref={true}
              target="_blank"
              className="flex flex-row p-3 hover:scale-105 hover:text-pink-400"
            >
              <BsFillChatTextFill className="me-3 text-2xl sm:text-3xl" />{" "}
              <h1>Chat with a Volunteer Listener</h1>
            </Link>
            <Link
              href={"https://befrienders.org/find-support-now/"}
              passHref={true}
              target="_blank"
              className="flex flex-row p-3 hover:scale-105 hover:text-pink-400"
            >
              <RiMentalHealthFill className="me-3 text-2xl sm:text-3xl" />{" "}
              <h1>Find support now</h1>
            </Link>
            <Link
              href={"https://blog.opencounseling.com/suicide-hotlines/"}
              passHref={true}
              target="_blank"
              className="flex flex-row p-3 hover:scale-105 hover:text-pink-400"
            >
              <BsFillTelephoneFill className="me-3 text-2xl sm:text-3xl" />{" "}
              <h1>International Suicide Hotlines</h1>
            </Link>
          </div>
        </div>

        <div
          className={`${caveat.className} animated-item show-up mx-auto mt-3 flex flex-row text-center text-4xl delay-[11s] sm:text-5xl md:mx-0 md:flex-col`}
        >
          <h1 className="me-5 md:me-0">Keep feelin'!</h1>
          <h1>Keep livin'!</h1>
        </div>
      </div>
      <div className="mb-5 mt-5 flex flex-row justify-center text-base text-pink-200 sm:mb-0 sm:text-2xl md:mt-10">
        <Link
          href={"/"}
          className="mx-2 h-fit w-fit rounded-full p-1.5 shadow-md shadow-pink-600 outline outline-2 outline-pink-600 transition-all duration-500 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950 active:-hue-rotate-30 sm:px-3 sm:py-2"
        >
          Start a new process
        </Link>
        {selectedEmotion ? (
          <PDFDownloadLink
            document={
              <YourReport
                selectedEmotion={selectedEmotion}
                thoughts={thoughts}
                affirmation={affirmation}
              />
            }
            fileName={`${selectedEmotion.name}.pdf`}
          >
            <button className="mx-2 h-fit w-fit rounded-full p-1.5 shadow-md shadow-pink-600 outline outline-2 outline-pink-600 transition-all duration-500 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950 active:-hue-rotate-30 sm:px-3 sm:py-2">
              Get my report
            </button>
          </PDFDownloadLink>
        ) : (
          <a
            href={"#selection"}
            aria-label="Let's go back to the selection"
            className="mx-2 h-fit w-fit rounded-full p-1 shadow-md shadow-pink-600 outline outline-2 outline-pink-600 transition-all duration-500 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950 active:-hue-rotate-30 sm:px-3 sm:py-2"
          >
            No report
          </a>
        )}
      </div>

      <div className="flex h-fit w-screen flex-row justify-between text-xs text-indigo-400 text-opacity-40">
        <div className="mx-1 flex w-fit flex-row">
          <span className="text-[10px]">2023</span>{" "}
          <span className="ms-1 font-bold"> Emotional Assistant</span>{" "}
          <RiCopyrightLine className="mb-2 text-[10px]" />
        </div>
        <div className="mx-1 flex w-fit flex-row">
          made with <HiHeart className="mx-1 text-pink-700" /> by
          <Link
            href={"https://github.com/NanaNiki"}
            className="mx-1 hover:italic hover:text-pink-600"
          >
            {" "}
            Nicol
          </Link>
        </div>
      </div>
    </div>
  );
}
