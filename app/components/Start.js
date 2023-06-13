/**
 * The Start function is a React component that displays a greeting message and prompts the user to
 * start a breathing exercise.
 * @returns This code is returning a React component that displays a welcome message and some images,
 * and includes a button that triggers a countdown when clicked. The countdown is implemented using
 * setInterval and updates the countStart state variable passed as props to the component. The
 * component also uses the Next.js Image component to display images with optimized loading and
 * rendering.
 */
import Image from "next/image";

export default function Start({ countStart, setCountStart }) {
  const startCountDown = () => {
    const interval = setInterval(() => {
      if (countStart > 0) {
        setCountStart((prev) => {
          if (prev === 1) {
            clearInterval(interval);
          }
          return prev - 1;
        });
      }
    }, 1500);
  };

  const handleStartCountDown = () => {
    startCountDown();
  };

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-evenly overflow-hidden text-center font-bold md:text-start">
        <div className="overflow-visible">
          <Image
            src={"images/btl.svg"}
            width={400}
            height={400}
            className="-left-24 -top-24 z-0 hidden sm:absolute md:inline"
            priority={true}
            alt="blob of pink and purple shades"
          />
          <Image
            src={"images/btr.svg"}
            width={430}
            height={400}
            className="absolute right-0 top-0 z-0"
            priority={true}
            alt="blob of pink and purple shades"
          />
          <Image
            src={"images/bbl.svg"}
            width={390}
            height={400}
            className="absolute -left-20 bottom-2 z-0 sm:-bottom-0 sm:-left-20"
            priority={true}
            alt="blob of violet and light blue shades"
          />
          <Image
            src={"images/bbr.svg"}
            width={400}
            height={400}
            className="-bottom-0 right-0 z-0 hidden sm:absolute md:inline"
            priority={true}
            alt="blob of violet and light blue shades"
          />
        </div>
        <h1 className="animated-item show-up text-3xl delay-[1s] sm:text-5xl">
          Hello!
        </h1>
        <h1 className="animated-item show-up text-3xl delay-[2s] sm:text-5xl">
          This is your Emotional Assistant!
        </h1>
        <h1 className="animated-item show-up mx-4 text-xl delay-[3s] sm:mx-0 sm:text-3xl">
          I'm here to assist you in the process of going through emotions.
        </h1>
        <h1 className="animated-item show-up hidden text-3xl delay-[5s] sm:flex">
          First, let's breathe a little
        </h1>
        <h1 className="animated-item show-up text-xl delay-[6s] sm:hidden">
          First,<br></br> let's breathe a little
        </h1>
        <a
          href={"#breathe"}
          onClick={handleStartCountDown}
          aria-label="Let's go to the breathing excercise"
          className="animated-item show-up rounded-full bg-purple-950 p-2.5 px-5 text-3xl text-white delay-[7s] hover:bg-pink-900"
        >
          Ready?
        </a>
      </div>
    </>
  );
}
