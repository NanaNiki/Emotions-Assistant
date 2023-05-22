import Link from "next/link";

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
  return (
    <div
      className="relative h-screen w-screen flex flex-col justify-center" id="process">
    <Link href="#work" className="absolute top-12 right-8 rotate-12 mt-5 w-fit mx-auto bg-pink-700 hover:bg-indigo-800 hover:delay-0 text-white rounded-full p-2 px-5 text-2xl animated-item slide-in delay-[10s] active:animate-ping"
          > Let's do the work!</Link>
      <h1 className="mt-10 animated-item show-up delay-[0.25s] text-3xl text-center font-bold">
        What does <span className="shadow-text">emotional integration</span> mean?
      </h1>
      <div className="h-fit w-8/12 mx-auto">
        <h1 className="animated-item show-up delay-[0.75s] text-xl text-center my-10">
          Emotional integration refers to the process of acknowledging,
          understanding, and accepting one's emotions in a healthy and
          constructive way.
        </h1>
        <h1 className="animated-item show-up delay-[1.25s] text-xl text-center">
          It involves developing emotional awareness, exploring the underlying
          causes and meanings of emotions, and finding adaptive ways to express
          and regulate them.
        </h1>
      </div>
      <div className="relative h-fit w-10/12 mx-auto mt-10">
        <div className="grid grid-cols-3">
          {processData.map((step, index) => {
            return (
              <div key={index} className="has-animation relative w-full h-full">
                <div className="uncover-animation absolute opacity-0 flex flex-col col-span-1 bg-indigo-200 rounded-3xl mx-4 h-[26rem] text-justify">
                  <h1 className="my-auto text-base m-6 text-indigo-700">
                    {step.text}
                  </h1>
                </div>
                <div className="cover-animation opacity-100 flex flex-col col-span-1 bg-indigo-400 rounded-3xl mx-4 text-center h-[26rem]">
                  <h1 className="my-auto text-3xl m-6">{step.name}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
