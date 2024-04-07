import React from "react";

const Herofooter = () => {
  return (
    <>
      <div className="my-24 text-white bg-gray-900  grid text-center justify-center">
        <h1 className=" text-5xl pt-28 font-semibold ">
          Easy access for easy bookings
        </h1>
        <p className="p-5">
          Share your Calendly link right from your browser, so you can schedule
          meetings without the back-and-forth
        </p>
        <div className="flex pb-28 justify-center">
          <button className="font-semibold  items-center mt-auto w-48 py-2 mx-4  focus:outline-none    border border-blue-500 hover:bg-sky-500  text-white rounded">
            Start for free
          </button>
          <button className=" font-semibold  items-center mt-auto w-48 py-2 px-4 focus:outline-none   border border-blue-500 hover:bg-sky-500 text-white rounded">
            Talk with sales
          </button>
        </div>
      </div>
    </>
  );
};

export default Herofooter;
