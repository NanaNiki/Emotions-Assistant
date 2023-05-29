/**
 * The Thankyou function is a React component that displays a message of gratitude and provides
 * resources for seeking professional help, as well as options to start a new emotional process or
 * download a report generated from app-data in pdf form.
 * @returns A React component is being returned.
 */
import { Caveat } from "next/font/google";
import { BsFillTelephoneFill, BsFillChatTextFill } from "react-icons/bs";
import { GiHeartInside, GiBrain } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import Link from "next/link";
import { useEffect } from "react";
import { observeScroll } from "../page";
import { PDFDownloadLink } from "@react-pdf/renderer";
import YourReport from "./YourReport";

const caveat = Caveat({ subsets: ["latin-ext"], weight: ["400"], preload: false });

export default function Thankyou({ selectedEmotion, thoughts }) {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col" id="thankyou">
      <h1 className="animated-item show-up text-4xl text-center md:mt-10 mt-5 shadow-text">
        Ok!
      </h1>
      <div className="flex flex-col md:w-8/12 w-10/12 mx-auto md:mt-5 mt-3">
        <h1 className="sm:w-9/12 animated-item show-up sm:text-xl py-5 text-justify mx-auto text-pink-200">
          I hope today's process helped you navigate your emotional experience!
          As your Emotional Assistant, my role concludes here. Take a moment to
          acknowledge the work you've done today.
        </h1>
        <div className="flex flex-row md:mt-3 mt-0">
          <GiBrain className="flex flex-col ms-10 justify-end text-5xl text-pink-700" />
          <div className="animated-item slide-in-left delay-[3s] w-9/12 h-[1px] bg-pink-700 shadow-md shadow-pink-400 m-auto"></div>
          <GiHeartInside className="flex flex-col me-10 justify-end text-5xl text-pink-700" />
        </div>

        <div className="flex md:flex-row flex-col md:mt-10 mt-3">
          <h1 className="md:w-8/12 sm:px-5 py-3 animated-item show-up delay-[5s] sm:text-xl text-justify font-bold mx-auto">
            Remember, this app is not a substitute for professional help. It's
            important to seek the guidance of qualified professionals who can
            provide personalized support for your well-being. You're not alone
            in this journey, and there are resources available to provide the
            support and care you deserve.
          </h1>
          <div className="flex flex-col md:mx-0 sm:my-3 md:my-0 mx-auto sm:text-xl text-base font-bold text-indigo-400 animated-item show-up sm:delay-[8s] delay-[7s]">
            <Link
              href={"https://buddyhelp.org/chat/"}
              passHref={true}
              target="_blank"
              className="flex flex-row hover:text-pink-400 hover:scale-105 p-3"
            >
              <BsFillChatTextFill className="me-3 sm:text-3xl text-2xl" />{" "}
              <h1>Chat with a Volunteer Listener</h1>
            </Link>
            <Link
              href={"https://befrienders.org/find-support-now/"}
              passHref={true}
              target="_blank"
              className="flex flex-row hover:text-pink-400 hover:scale-105 p-3"
            >
              <RiMentalHealthFill className="me-3 sm:text-3xl text-2xl" />{" "}
              <h1>Find support now</h1>
            </Link>
            <Link
              href={"https://blog.opencounseling.com/suicide-hotlines/"}
              passHref={true}
              target="_blank"
              className="flex flex-row hover:text-pink-400 hover:scale-105 p-3"
            >
              <BsFillTelephoneFill className="me-3 sm:text-3xl text-2xl" />{" "}
              <h1>International Suicide Hotlines</h1>
            </Link>
          </div>
        </div>

        <div
          className={`${caveat.className} flex md:flex-col flex-row animated-item show-up delay-[11s] sm:text-5xl text-4xl text-center mt-3 md:mx-0 mx-auto`}
        >
          <h1 className="md:me-0 me-5">Keep feelin'!</h1>
          <h1>Keep livin'!</h1>
        </div>
        <div className="flex flex-row md:mt-10 mt-5 justify-center sm:text-2xl text-pink-200">
          <button
            onClick={() => window.location.reload()}
            className="outline outline-2 outline-pink-600 rounded-full w-fit h-fit sm:px-3 sm:py-2 p-1 mx-2 shadow-md shadow-pink-600 transition-all duration-500 active:-hue-rotate-30 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950"
          >
            Start a new process
          </button>
          {selectedEmotion ? ( <PDFDownloadLink
            document={<YourReport selectedEmotion={selectedEmotion} thoughts={thoughts} />}
           fileName={`${selectedEmotion.name}.pdf`} as="style"
          >
            <button className="outline outline-2 outline-pink-600 rounded-full w-fit h-fit sm:px-3 sm:py-2 p-1 mx-2 shadow-md shadow-pink-600 transition-all duration-500 active:-hue-rotate-30 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950">
              Get my report
            </button>
          </PDFDownloadLink> ) 
          : <Link
            href={"#selection"}
            className="outline outline-2 outline-pink-600 rounded-full w-fit h-fit sm:px-3 sm:py-2 p-1 mx-2 shadow-md shadow-pink-600 transition-all duration-500 active:-hue-rotate-30 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-950">
              No report
            </Link>
          }
          
        </div>
      </div>
    </div>
  );
}
