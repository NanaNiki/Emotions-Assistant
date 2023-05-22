import { RxCross1 } from "react-icons/rx";

export default function Popup({ onHandleClose }) {
  return (
    <div className="z-30 fixed top-1/3 right-1/4 w-6/12 h-4/12 rounded-3xl bg-indigo-200 text-pink-900 shadow-lg shadow-pink-600">
      <button
        onClick={onHandleClose}
        className="text-purple-700 text-2xl hover:text-pink-700 text-end absolute right-8 top-6"
      >
        <RxCross1 />
      </button>
      <div className="p-8 ms-8 text-justify text-lg">
        <h1 className="text-center my-4 text-xl">Oops!</h1>
        <h1>It seems that we don't have the emotion You are looking for.</h1>
        <h1> We are sorry! Please select the emotion listed below.</h1>
        <h1>You can click on an icon or type in the name of emotion.</h1>
        <h1>To confirm your choice, please click the check mark.</h1>
      </div>
    </div>
  );
}
