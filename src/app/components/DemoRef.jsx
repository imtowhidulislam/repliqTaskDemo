"use client";
import React, { useRef } from "react";

const DemoRef = () => {
  let counterRef = useRef(0);

  const handleRef = () => {
    counterRef.current = counterRef.current + 1;
  };
  console.log(counterRef);

  return (
    <div className="grid place-items-center space-y-4">
      <p className="text-center text-4xl text-primary">{counterRef.current}</p>
      <button
        onClick={handleRef}
        className="w-max cursor-pointer rounded-full capitalize font-bold bg-transparent px-8 py-2 text-primary drop-shadow-lg transition-all duration-200 ease-in-out hover:bg-primary hover:text-nutral3 focus:ring-2 focus:ring-nutral1"
      >
        Increment
      </button>
    </div>
  );
};

export default DemoRef;
