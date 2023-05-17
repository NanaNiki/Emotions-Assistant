'use client';
// import dynamic from "next/dynamic.js";
import Start from "./components/Start.js";

export function observeScroll(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("s");
      }
    });
  });
  elements.forEach((el) => observer.observe(el));
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-evenly p-5 scroll-smooth overflow-hidden">
      <Start />
      {/* <DynamicBreathe/> */}
    </main>
  );
}

// const DynamicBreathe = dynamic(() => import("./components/Breathe"), {
//   ssr: false,
// });