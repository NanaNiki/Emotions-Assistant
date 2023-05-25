import "./globals.css";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Emotions Assistant App",
  description: "Build with next.js and emotions by NanaNiki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-100 ${comfortaa.className}`}>
        {children}
      </body>
    </html>
  );
}
