"use client";

import React from "react";

import Accordian from "./accordian";
import useMediaQuery from "@/hooks/useMediaQuery";

const Content = ({ title, body, src }) => {
  const tablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div className="text-left gap-16  py-12 px-4  lg:px-8 grid lg:grid-cols-2  bg-amber-200 rounded-3xl lg:mt-10">
      <div className="lg:px-16 lg:py-12 sm:px-8">
        <h1 className="  lg:text-5xl  px-7 font-semibold sm:text-5xl sm:leading-9 sm:gap-x-6  text-gray-900">
          {title}
          <img src={src} />
        </h1>
        <p className="gap-x-6  px-6 sm:px-6 text-2xl sm:gap-x-10 text-black pt-6">
          {body}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error, beatae?
        </p>
        <div className="lg:px-4 lg:py-10 ">
          {!tablet && (
            <button className="  border-2 rounded-full gap-2 border-black border-solid mt-6 py-5 px-14 text-xl font-semibold text-black uppercase transition-colors duration-200 transform bg-red-600 rounded-full shadow-xl hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              Discover Product
            </button>
          )}
        </div>
      </div>
      <Accordian src={"./card-2.svg"} />
      <div>
        {tablet && (
          <button className="border-2 rounded-full  border-black border-solid mt-8 py-5 px-11 text-lg font-semibold text-black uppercase transition-colors duration-200 transform bg-red-600 rounded-full shadow-xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            Discover Product
          </button>
        )}
      </div>
    </div>
  );
};

export default Content;
