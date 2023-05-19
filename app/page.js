"use client";
import dynamic from "next/dynamic.js";
import Start from "./components/Start.js";

export function observeScroll(elements, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    });
  });
  elements.forEach((el) => observer.observe(el));
}

export default function Home() {
  return (
    <main className="w-screen scroll-smooth overflow-hidden">
      <Start />
      <DynamicEmotions />
      <DynamicSelection />
      <DynamicProcess />
    </main>
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
