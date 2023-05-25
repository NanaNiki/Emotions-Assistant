"use client";
import dynamic from "next/dynamic.js";
import Start from "./components/Start.js";
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
        <Start countStart={countStart} setCountStart={setCountStart}/>
        <DynamicBreathe countStart={countStart} setCountStart={setCountStart}/>
        {/* <DynamicEmotions />
        <DynamicSelection
          setShowPopUp={setShowPopUp}
          setSelectedEmotion={setSelectedEmotion}
        />
        <DynamicProcess />
        <DynamicWork selectedEmotion={selectedEmotion} /> */}
        <DynamicIntegration />
        <DynamicThankyou />
      </main>
      {showPopUp && <Popup onHandleClose={handleClosePopUp} />}
    </>
  );
}

const DynamicBreathe = dynamic(() => import("./components/Breathe"), {
  ssr: false,
});
const DynamicEmotions = dynamic(() => import("./components/Emotions"), {
  ssr: false,
});
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
