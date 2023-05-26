import { RxCross1 } from "react-icons/rx";

export default function Popup({ onHandleClose }) {
  return (
    <div className="z-30 fixed sm:top-1/3 sm:right-1/4 top-1/4 sm:w-6/12 w-[24rem] rounded-3xl bg-indigo-200 font-bold text-pink-900 shadow-lg shadow-pink-600">
      <button
        onClick={onHandleClose}
        className="text-purple-700 text-2xl hover:text-pink-700 text-end absolute right-8 top-6"
      >
        <RxCross1 />
      </button>
      <div className="sm:p-8 sm:ms-8 py-10 px-12 text-justify sm:text-lg text-base">
        <h1 className="text-center my-4 text-xl font-extrabold text-pink-700">Oops!</h1>
        <h1>It seems that we don't have the emotion You are looking for.</h1>
        <h1> We are sorry! Please select the emotion listed below.</h1>
        <h1>You can click on an icon or type in the name of emotion.</h1>
        <h1>To confirm your choice, please click the check mark.</h1>
      </div>
    </div>
  );
}
