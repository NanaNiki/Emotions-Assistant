import Link from "next/link";

export default function Work({selectedEmotion}) {
  return (
    <div className="h-screen w-screen" id="work">
      {!selectedEmotion ? (
        <div className="w-fit h-fit mt-20 mx-auto items-center flex">
          <Link
            href={"#selection"}
            className="text-center text-3xl p-2 text-pink-200 shadow-md rounded-full shadow-pink-600 transition-all duration-700 hover:bg-pink-700 hover:shadow-purple-900"
          >
            Emotion not selcted. Please go back to Selection.
          </Link>
        </div>
      ) : (
        <>
          <h1 className="animated-item delay-[0.5s] text-3xl text-center pt-10">
            Let's work on:{" "}
            <span className="shadow-text font-bold">
              {selectedEmotion.name}
            </span>
          </h1>
          <h1 className="text-xl p-5 w-8/12 text-justify mx-auto">
            {selectedEmotion.text}
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-col m-5 bg-indigo-500 rounded-3xl">
              <h1 className=" text-2xl text-center pt-5 shadow-text">
                How to feel it?
              </h1>
              <h1 className=" text-base p-5 text-indigo-100">
                {selectedEmotion.feel}
              </h1>
            </div>
            <div className="flex flex-col m-5 bg-indigo-500 rounded-3xl">
              <h1 className="text-2xl text-center pt-5 shadow-text">
                How to express it?
              </h1>
              <h1 className=" text-base p-5 text-indigo-100">
                {selectedEmotion.express}
              </h1>
            </div>
          </div>
          <div className="w-8/12 h-fit animated-item delay-[2s] blur-md bg-pink-900 rounded-full mx-auto mt-5">
            <h1 className="px-12 py-4 text-justify text-pink-300">
              {selectedEmotion.note}
            </h1>
          </div>
        </>
      )}
      <Link href={"#integration"}></Link>
    </div>
  );
}
