/**
 * The function displays a process of emotional integration with three steps and allows the user to
 * switch between them, in smaller screen size screen size.
 * @returns The component `Process` is being returned, which contains JSX elements and logic to display
 * and handle the steps of emotional integration.
 */
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
      className="relative flex h-fit w-screen flex-col justify-center sm:h-screen"
      id="process"
    >
      <h1 className="animated-item show-up mt-3 text-center text-2xl font-bold delay-[0.25s] sm:text-3xl md:mt-10">
        What does <span className="shadow-text">emotional integration</span>{" "}
        mean?
      </h1>
      <div className="mx-auto h-fit w-10/12 sm:w-8/12">
        <h1 className="animated-item show-up my-4 text-base delay-[0.75s] sm:my-10 sm:text-center sm:text-xl">
          Emotional integration refers to the process of acknowledging,
          understanding, and accepting one's emotions in a healthy and
          constructive way.
        </h1>
        <h1 className="animated-item show-up text-base delay-[1.25s] sm:text-center sm:text-xl">
          It involves developing emotional awareness, exploring the underlying
          causes and meanings of emotions, and finding adaptive ways to express
          and regulate them.
        </h1>
      </div>
      <div className="mx-auto mt-3 flex flex-row sm:mt-10 md:hidden">
        <button
          onClick={() => handleActiveStep(1)}
          aria-label="Feel it"
          className="rounded-full bg-pink-700 p-1.5 px-4 focus:text-pink-950"
        >
          Step 1
        </button>
        <button
          onClick={() => handleActiveStep(2)}
          aria-label="Express it"
          className="mx-4 rounded-full bg-pink-700 p-1.5 px-4 focus:text-pink-950"
        >
          Step 2
        </button>
        <button
          onClick={() => handleActiveStep(3)}
          aria-label="Integrate it"
          className="rounded-full bg-pink-700 p-1.5 px-4 focus:text-pink-950"
        >
          Step 3
        </button>
      </div>
      <div className="relative mx-auto mt-4 h-fit w-11/12 overflow-y-hidden sm:mt-5 sm:w-10/12 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {processData.map((step, index) => {
            return (
              <div
                key={index}
                id={step.id}
                className={`has-animation relative h-full w-full ${
                  activeStep === step.id ? "" : "hidden md:inline"
                }`}
              >
                <div className="uncover-animation absolute col-span-1 mx-4 flex h-[23rem] flex-col rounded-3xl bg-indigo-200 text-justify opacity-0 sm:h-[20rem] md:h-[26rem]">
                  <h1 className="m-6 my-auto text-sm text-indigo-700 selection:bg-pink-600 selection:text-pink-100 sm:text-base">
                    {step.text}
                  </h1>
                </div>
                <div className="cover-animation col-span-1 mx-4 flex h-[23rem] flex-col rounded-3xl bg-indigo-400 text-center opacity-100 sm:h-[20rem] md:h-[26rem]">
                  <h1 className="m-6 my-auto text-3xl">{step.name}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <a href="#work">
        <h1 className="animated-item slide-in-left relative mx-auto mt-4 w-fit rounded-full bg-pink-700 p-2 px-3 text-xl text-white hover:bg-indigo-800 hover:delay-0 active:animate-bounce sm:px-5 sm:text-2xl md:absolute md:right-8 md:top-12 md:mt-5 md:rotate-12 md:delay-[10s]">
          Let's do the work!
        </h1>
      </a>
    </div>
  );
}
