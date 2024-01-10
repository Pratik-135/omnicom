"use client";

import Card from "@/components/Card";
import Content from "@/components/content";
import useMediaQuery from "@/hooks/useMediaQuery";
import classNames from "classnames";
import { useState } from "react";

const Tab = () => {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const [activeTab, setActiveTab] = useState([true, false, false, false]);

  const abs = tablet
    ? "static"
    : "!absolute bottom-0 w-full left-0 translate-y-[100%]";

  return (
    <div className="relative ">
      <div className=" grid gap-4 lg:grid-cols-4">
        <div
          onClick={() => {
            setActiveTab([true, false, false, false]);
          }}
        >
          <div className="border-slate-100  rounded-3xl border-2 border-solid">
            <Card src={"./card-1.svg"} active={activeTab[0]} />
            {activeTab[0] && (
              <div className={classNames(abs)}>
                <div className="text-5xl">
                  <Content title="Product 1 " body="kjj" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            setActiveTab([false, true, false, false]);
          }}
        >
          <div className="border-slate-100  rounded-3xl border-2 border-solid">
            <Card src={"./card-2.svg"} active={activeTab[1]} />
            {activeTab[1] && (
              <div className={classNames(abs)}>
                <div className="text-5xl">
                  <Content title="Product 2 " body="kjj" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            setActiveTab([false, false, true, false]);
          }}
        >
          <div className="border-slate-100 rounded-3xl border-2 border-solid">
            <Card src={"./card-3.svg"} active={activeTab[2]} />
            {activeTab[2] && (
              <div className={classNames(abs)}>
                <div className="text-5xl ">
                  <Content title="Product 3" body="kjj" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            setActiveTab([false, false, false, true]);
          }}
        >
          <div className="border-slate-100 rounded-3xl border-2 borlder-solid">
            <Card src={"./card-4.svg"} active={activeTab[3]} />
            {activeTab[3] && (
              <div className={classNames(abs)}>
                <div className="text-5xl">
                  <Content title="Product 4" body="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
