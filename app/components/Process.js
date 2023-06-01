/**
 * The function displays a process of emotional integration with three steps and allows the user to
 * switch between them, in smaller screen size screen size.
 * @returns The component `Process` is being returned, which contains JSX elements and logic to display
 * and handle the steps of emotional integration.
 */
import Link from "next/link";
import { useState } from "react";

const processData = [
  {
    id: 1,
    name: "Feel it",
    text: "Feeling the emotion involves allowing yourself to fully experience and acknowledge the emotion without judgment or suppression. It's about being present with the sensations, thoughts, and energy associated with the emotion, and recognizing its impact on your body and mind. This step requires developing emotional awareness and creating a safe space within yourself to honor and validate your emotions.",
  },
  {
    id: 2,
    name: "Express it",
    text: "Expressing the emotion entails finding healthy and authentic ways to communicate and release the energy of the emotion. It can involve verbal expression, such as talking to a trusted person or engaging in self-reflection through journaling. Non-verbal expressions like creative outlets, physical activities, or artistic endeavors can also provide a channel for emotional expression. The key is to find methods that resonate with you and allow the emotion to be expressed constructively.",
  },
  {
    id: 3,
    name: "Integrate the expierience",
    text: "Integrating the experience involves reflecting on the emotion and its underlying causes or triggers, and integrating the lessons or insights gained from the emotional experience. It's about finding meaning and growth from the emotion, recognizing patterns or recurring themes, and using this knowledge to inform future actions and responses. Integration may also involve communicating your experience and insights with others, fostering deeper connection and understanding.",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  const handleActiveStep = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <div
      className="relative h-screen w-screen flex flex-col justify-center"
      id="process"
    >
      <h1 className="md:mt-10 mt-3 animated-item show-up delay-[0.25s] sm:text-3xl text-2xl text-center font-bold">
        What does <span className="shadow-text">emotional integration</span>{" "}
        mean?
      </h1>
      <div className="h-fit sm:w-8/12 w-10/12 mx-auto">
        <h1 className="animated-item show-up delay-[0.75s] sm:text-xl text-base sm:text-center sm:my-10 my-4">
          Emotional integration refers to the process of acknowledging,
          understanding, and accepting one's emotions in a healthy and
          constructive way.
        </h1>
        <h1 className="animated-item show-up delay-[1.25s] sm:text-xl text-base sm:text-center">
          It involves developing emotional awareness, exploring the underlying
          causes and meanings of emotions, and finding adaptive ways to express
          and regulate them.
        </h1>
      </div>
      <div className="flex flex-row mx-auto md:hidden sm:mt-10 mt-3">
        <button
          onClick={() => handleActiveStep(1)}
          aria-label="Feel it"
          className="bg-pink-700 p-1.5 px-4 rounded-full focus:text-pink-950"
        >
          Step 1
        </button>
        <button
          onClick={() => handleActiveStep(2)}
          aria-label="Express it"
          className="bg-pink-700 p-1.5 px-4 mx-4 rounded-full focus:text-pink-950"
        >
          Step 2
        </button>
        <button
          onClick={() => handleActiveStep(3)}
          aria-label="Integrate it"
          className="bg-pink-700 p-1.5 px-4 rounded-full focus:text-pink-950"
        >
          Step 3
        </button>
      </div>
      <div className="relative h-fit sm:w-10/12 w-11/12 mx-auto md:mt-10 sm:mt-5 mt-4 overflow-y-hidden">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {processData.map((step, index) => {
            return (
              <div
                key={index}
                id={step.id}
                className={`has-animation relative w-full h-full ${
                  activeStep === step.id ? "" : "hidden md:inline"
                }`}
              >
                <div className="uncover-animation absolute opacity-0 flex flex-col col-span-1 bg-indigo-200 rounded-3xl mx-4 md:h-[26rem] sm:h-[20rem] h-[23rem] text-justify">
                  <h1 className="my-auto sm:text-base text-sm m-6 text-indigo-700 selection:bg-pink-600 selection:text-pink-100">
                    {step.text}
                  </h1>
                </div>
                <div className="cover-animation opacity-100 flex flex-col col-span-1 bg-indigo-400 rounded-3xl mx-4 text-center md:h-[26rem] sm:h-[20rem] h-[23rem]">
                  <h1 className="my-auto text-3xl m-6">{step.name}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link href="#work">
        <h1 className="relative md:absolute md:top-12 md:right-8 md:rotate-12 md:mt-5 mt-4 w-fit mx-auto bg-pink-700 hover:bg-indigo-800 hover:delay-0 text-white rounded-full p-2 sm:px-5 px-3 sm:text-2xl text-xl animated-item slide-in-left md:delay-[10s] active:animate-bounce">
          Let's do the work!
        </h1>
      </Link>
    </div>
  );
}
