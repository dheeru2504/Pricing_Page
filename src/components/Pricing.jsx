import React from "react";
import Switch from "@mui/material/Switch";
const Pricing = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-row align-center w-full mb-20 place-content-center mx-auto">
            <p className="mt-1 mr-1 ">Billed Monthly</p>
            <div className="">
              <Switch {...label} size="medium" defaultChecked />
            </div>
            <p className="mt-1 mr-1 font-bold" style={{ color: "#1971eb" }}>
              Billed annually
            </p>
            <p className="mt-1 ml-5 font-bold" style={{ color: "#1a3e5f" }}>
              Save 20% with annual plans
            </p>
          </div>
          <div
            class="flex flex-wrap  xl:justify-between md:-m-4 "
            style={{ color: "#1a3e5f" }}
          >
            <div class="mt-4  mb-4 xl:w-72 md:w-1/2 w-full md:h-96 ">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 bg-gray-100 flex flex-col relative overflow-hidden justify-between">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium text-slate-800">
                  Basic
                </h2>
                <h1 class="text-5xl  pb-4 mb-4 border-b font-semibold border-gray-200 leading-none">
                  Always Free
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  When You just want the basics
                </p>

                <button
                  class="border-2 flex items-center mt-auto font-semibold 
                 py-2 px-4 w-full focus:outline-none text-sky-500    border-sky-500 hover:bg-blue-500 hover:text-white  rounded"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div class="mt-4 mb-4 xl:w-72 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  Essential
                </h2>
                <h1 class="text-5xl font-semibold text-slate-800 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$8</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">
                    /seat/mo
                  </span>
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  When you need powerful scheduling automation
                </p>

                <button class="border-2 flex font-semibold items-center mt-auto  py-2 px-4 w-full focus:outline-none text-sky-500    border-sky-500 hover:bg-blue-500 hover:text-white rounded">
                  Start Essential
                </button>
              </div>
            </div>
            <div class="mt-4 mb-4 xl:w-72 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <p>Most popular</p>
                <h2 class="text-sm font-semibold tracking-widest title-font mb-1 font-medium">
                  Professional
                </h2>
                <h1 class="text-5xl font-semibold text-slate-800 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$12</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">
                    /seat/mo
                  </span>
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  when you need customisation, integrations, and basic team
                  features
                </p>

                <button class="flex font-semibold items-center mt-auto     py-2 px-4 w-full focus:outline-none text-sky-500  border-2 border-sky-500 hover:bg-blue-500 hover:text-white rounded">
                  Start Professional
                </button>
              </div>
            </div>
            <div class="mt-4 mb-4 xl:w-72 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 class="text-sm font-semibold tracking-widest title-font mb-1 font-medium">
                  Teams
                </h2>
                <h1 class=" font-semibold text-5xl text-slate-800 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$16</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">
                    /seat/mo
                  </span>
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  when your team needs to aloign on an scheduling process and
                  collaborate efficiently
                </p>

                <button class="flex font-semibold  items-center mt-auto py-2 px-4 w-full focus:outline-none text-sky-500  border-2 border-sky-500 hover:bg-blue-500 hover:text-white rounded">
                  Try for Free
                </button>
              </div>
            </div>
            <div class="mt-4 mb-4 xl:w-72 md:w-1/2 w-full text-white">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex bg-gray-900  flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                  EnterPrise
                </h2>
                <h2 class="text-white font-semibold text-5xl text-slate-800 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  Contact Us
                </h2>
                <p class="flex items-center   mb-2 ">
                  when your 30+ member team needs advanced security, control,
                  and support
                </p>

                <button class="flex font-semibold items-center mt-auto  py-2 px-4 w-full focus:outline-none text-white  border  hover:bg-grey-100  rounded">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
