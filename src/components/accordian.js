"use client";

import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { CaretUp } from "@phosphor-icons/react";

const Accordion = ({}) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabChange = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <div className="w-full p-2">
      <ul className="w-full space-y-2">
        {[1, 2, 3, 4, 5].map((tab, index) => (
          <li key={tab} className="">
            <button
              onClick={() => handleTabChange(index)}
              className={` border-black  border-b-2 w-full py-2 pb-6 px-4 bg-amber-200 text-left text-sm font-semibold  focus:outline-hidden transition-all duration-300 ease-in-out ${
                activeTab === index
                  ? "bg-amber-200 text-black"
                  : "text-gray-600"
              }`}
            >
              <div class="grid grid-rows-1 grid-flow-col gap-6">
                <div>
                  <div className="flex items-center ">
                    {tab == 1 ? <img src="/Accord4.svg" alt="" /> : <></>}
                    {tab == 2 ? <img src="/Accord1.svg" alt="" /> : <></>}
                    {tab == 3 ? <img src="/Accord3.svg" alt="" /> : <></>}
                    {tab == 4 ? <img src="/Accord2.svg" alt="" /> : <></>}
                    {tab == 5 ? <img src="/Accord4.svg" alt="" /> : <></>}
                    <p className="text-lg  font-semibold pl-6 ">
                      Accordion title {tab}
                    </p>
                  </div>
                </div>

                <div>
                  {" "}
                  <span className="  py-4 flex justify-end items-center">
                    {activeTab === index ? <CaretUp /> : <CaretDown />}
                  </span>{" "}
                </div>
              </div>
            </button>
            {activeTab === index && (
              <div className=" p-6 bg-amber-200 rounded-lg">
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sagittis eu libero eget pulvinar. Cras posuere ligula
                  vel efficitur ullamcorper.
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
