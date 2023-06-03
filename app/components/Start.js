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
import Link from "next/link";

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
    <div className="flex flex-col items-center md:text-start text-center justify-evenly h-screen w-screen font-bold overflow-hidden">
    <div className="overflow-visible">
          <Image
            src={"images/btl.svg"}
            width={400}
            height={400}
            className="z-0 sm:absolute -top-24 -left-24 hidden md:inline"
            priority={true}
            alt="blob of pink and purple shades"
          />
          <Image
            src={"images/btr.svg"}
            width={430}
            height={400}
            className="z-0 absolute top-0 right-0"
            priority={true}
            alt="blob of pink and purple shades"
          />
          <Image
            src={"images/bbl.svg"}
            width={390}
            height={400}
            className="z-0 absolute sm:-bottom-0 sm:-left-20 bottom-2 -left-20"
            priority={true} 
            alt="blob of violet and light blue shades"        
           />
          <Image
            src={"images/bbr.svg"}
            width={400}
            height={400}
            className="z-0 sm:absolute -bottom-0 right-0 hidden md:inline"
            priority={true}
            alt="blob of violet and light blue shades"  
          />
        </div>
      <h1 className="animated-item show-up delay-[1s] sm:text-5xl text-3xl">
        Hello!
      </h1>
      <h1 className="animated-item show-up delay-[2s] sm:text-5xl text-3xl">
        This is your Emotional Assistant!
      </h1>
      <h1 className="animated-item show-up delay-[3s] sm:text-3xl sm:mx-0 text-xl mx-4">
        I'm here to assist you in the process of going through emotions.
      </h1>
      <h1 className="animated-item show-up delay-[5s] sm:flex hidden text-3xl">
        First, let's breathe a little
      </h1>
      <h1 className="animated-item show-up delay-[6s] sm:hidden text-xl">
        First,<br></br> let's breathe a little
      </h1>
      <Link
      href={"#breathe"}
        onClick={handleStartCountDown}
        aria-label="Let's go to the breathing excercise"
        className="bg-purple-950 hover:bg-pink-900 text-white rounded-full p-2.5 px-5 text-3xl animated-item show-up delay-[7s]"
      >
        Ready?
      </Link>
    </div>
    </>
  );
}
