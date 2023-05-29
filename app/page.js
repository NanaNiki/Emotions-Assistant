/**
 * This is a Next.js page component that renders various components based on user interactions and uses
 * dynamic imports for code splitting.
 * @param elements - The `elements` parameter is an array of DOM elements that we want to observe for
 * intersection changes using the `IntersectionObserver` API. The `observeScroll` function takes this
 * array as input and adds an observer to each element in the array. When an observed element
 * intersects with the viewport, the observer adds the class 'show' to the element.
 */
"use client";
import dynamic from "next/dynamic.js";
import Start from "./components/Start.js";
import Breathe from "./components/Breathe";
import Emotions from "./components/Emotions";
import { useState, useEffect } from "react";
import Popup from "./components/Popup.js";

export function observeScroll(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  elements.forEach((el) => observer.observe(el));
}

export default function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [countStart, setCountStart] = useState(3);
  const [thoughts, setThoughts] = useState("");
  const handleClosePopUp = () => setShowPopUp(false);

  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  return (
    <>
      <main
        className={`${
          showPopUp ? "opacity-40" : ""
        } w-screen h-full scroll-smooth`}
      >
        <Start countStart={countStart} setCountStart={setCountStart} />
        <Breathe countStart={countStart} setCountStart={setCountStart} />
        <Emotions />
        <DynamicSelection
          setShowPopUp={setShowPopUp}
          setSelectedEmotion={setSelectedEmotion}
        />
        <DynamicProcess />
        <DynamicWork selectedEmotion={selectedEmotion} />
        <DynamicIntegration setThoughts={setThoughts} />
        <DynamicThankyou selectedEmotion={selectedEmotion} thoughts={thoughts} />
      </main>
      {showPopUp && <Popup onHandleClose={handleClosePopUp} />}
    </>
  );
}

const DynamicSelection = dynamic(() => import("./components/Selection.js"), {
  ssr: false,
});
const DynamicProcess = dynamic(() => import("./components/Process.js"), {
  ssr: false,
});
const DynamicWork = dynamic(() => import("./components/Work.js"), {
  ssr: false,
});
const DynamicIntegration = dynamic(() => import("./components/Integration.js"), {
  ssr: false,
});
const DynamicThankyou = dynamic(() => import("./components/Thankyou.js"), {
  ssr: false,
});
