"use client";
import dynamic from "next/dynamic.js";
import Start from "./components/Start.js";
import { useState, useEffect } from 'react';
import Popup from "./components/Popup.js";

export function observeScroll(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
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
  const handleClosePopUp = () => setShowPopUp(false);

  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  return (
    <>
    <main className={`${showPopUp ? "opacity-40" : ""} w-screen scroll-smooth overflow-hidden`}>
      <Start />
      <DynamicEmotions />
      <DynamicSelection setShowPopUp={setShowPopUp} />
      <DynamicProcess />
      <DynamicWork />
    </main>
    {showPopUp && <Popup onHandleClose={handleClosePopUp} />}
    </>
  );
}

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