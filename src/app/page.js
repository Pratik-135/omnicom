"use client";
// import Image from "next/image";

import Tab from "@/components/tab";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(0);
  return (
    <>
      <div className="container mx-auto">
        <div className=" text-4xl font-semibold text-center mb-2">
          <h1>Section Title</h1>
        </div>
        <div className="  font-normal text-2xl text-center mb-4">
          <h1>Sub Section Title</h1>
        </div>
        <Tab />
      </div>
    </>
  );
}
