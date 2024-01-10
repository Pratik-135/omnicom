"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { ArrowDown } from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react";
import classNames from "classnames";

const card = ({ active, src }) => {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {!tablet ? (
        <div
          className={classNames(
            "border text-left rounded-xl overflow-hidden relative group cursor-pointer grid justify-start"
          )}
        >
          <div className="p-6 pb-0">
            <div>
              <h5 className="  flex justify-between  px-6 sm:gap-x-6  text-xl leading-6 font-semibold grow line-clamp-2 pb-4 ">
                Card Title
                <img src={src} />
              </h5>
            </div>
            <p className="text-base font-medium mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              beatae?
            </p>
          </div>
          <button className=" relative  w-fit mt-2.5 ">
            <span
              className={` bg-slate-100 h-full flex gap-4 items-center w-full h-full group-hover:bg-yellow-500 px-6 z-50 relative py-4 rounded-tr-3xl group-hover:translate-y-[-6px] ${
                active ? " !bg-amber-500 ! translate-y-[-6px] " : ""
              }`}
            >
              Discover <ArrowDown />
            </span>
            <span
              className={` px-6 top-[6px] left-[0px] absolute w-[105%] h-full py-4 gap-4 items-center bg-blue-500 hidden group-hover:block rounded-tr-3xl ${
                active ? "!block" : ""
              } `}
            ></span>
          </button>
        </div>
      ) : (
        <>
          <div
            className={`border-solid ${
              active ? "" : "border-b-8"
            } border-yellow-600 bg-amber-200 rounded-xl overflow-hidden w-full`}
          >
            <div className="w-full bg-white text-gray-700 font-semibold py-6 px-8 flex justify-between">
              <img src={src} alt="Card Image" />
              <h1 className="py-2 text-2xl font-semibold">Card title</h1>
              <div className="py-4 px-8">
                {active} <Plus />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default card;
