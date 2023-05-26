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
    <div className="flex flex-col items-center sm:text-start text-center justify-evenly h-screen w-screen font-bold overflow-hidden">
    <div className="overflow-visible">
          <Image
            src={"btl.svg"}
            width={400}
            height={400}
            className="z-0 sm:absolute -top-24 -left-24 hidden sm:visible"
            priority={true}
          />
          <Image
            src={"btr.svg"}
            width={430}
            height={400}
            className="z-0 absolute top-0 right-0"
            priority={true}
          />
          <Image
            src={"bbl.svg"}
            width={390}
            height={400}
            className="z-0 absolute sm:-bottom-0 sm:-left-20 bottom-2 -left-20"
            priority={true}         
           />
          <Image
            src={"bbr.svg"}
            width={400}
            height={400}
            className="z-0 sm:absolute -bottom-0 right-0 hidden sm:visible"
            priority={true}
          />
        </div>
      <h1 className="animated-item show-up delay-[2s] sm:text-5xl text-3xl">
        Hello!
      </h1>
      <h1 className="animated-item show-up delay-[3s] sm:text-5xl text-3xl">
        This is your Emotional Assistant!
      </h1>
      <h1 className="animated-item show-up delay-[4s] sm:text-3xl sm:mx-0 text-xl mx-4">
        I'm here to assist you in the process of going through emotions.
      </h1>
      <h1 className="animated-item show-up delay-[6s] sm:flex hidden text-3xl">
        First, let's breathe a little
      </h1>
      <h1 className="animated-item show-up delay-[6s] sm:hidden text-xl">
        First,<br></br> let's breathe a little
      </h1>
      <Link
      href={"#breathe"}
        onClick={handleStartCountDown}
        className="bg-purple-950 hover:bg-pink-900 text-white rounded-full p-2.5 px-5 text-3xl animated-item show-up sm:delay-[0.5s] delay-[7s]"
      >
        Ready?
      </Link>
    </div>
    </>
  );
}
