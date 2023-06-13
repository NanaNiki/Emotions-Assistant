/**
 * This is a React component that renders a popup with a message and options for selecting an emotion.
 * @returns A React component that renders a popup with a message and a close button. The popup has a
 * fixed position and a rounded shape, and it is styled with various classes from the Tailwind CSS
 * library. The popup also includes an icon from the React Icons library. The component takes a prop
 * called onHandleClose, which is a function that will be called when the close button is clicked.
 */
import { RxCross1 } from "react-icons/rx";

export default function Popup({ onHandleClose }) {
  return (
    <div className="fixed top-1/4 z-30 w-full rounded-3xl bg-indigo-200 font-bold text-pink-900 shadow-lg shadow-pink-600 sm:right-1/4 sm:top-1/3 md:w-6/12">
      <button
        onClick={onHandleClose}
        aria-label="Close the popup message"
        className="absolute right-8 top-6 text-end text-2xl text-purple-700 hover:text-pink-700"
      >
        <RxCross1 />
      </button>
      <div className="px-12 py-10 text-justify text-base sm:text-lg md:ms-8 md:p-8">
        <h1 className="my-4 text-center text-xl font-extrabold text-pink-700">
          Oops!
        </h1>
        <h1>It seems that we don't have the emotion You are looking for.</h1>
        <h1> We are sorry! Please select the emotion listed below.</h1>
        <h1>You can click on an icon or type in the name of emotion.</h1>
        <h1>To confirm your choice, please click the check mark.</h1>
      </div>
    </div>
  );
}
