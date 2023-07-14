"use client";
import React, { useEffect, useRef, useState } from "react";

const DemoRef = () => {
  const personName = ["Towhid","Asif","David miller"];
  const [longName, setLongName] = useState("");
  const findLongName = (name) => {
    console.log(name);
    let longestName = "";
    name.map((name,i) => {
      console.log(name, i);
      for (let i = 0; i <= name.length; i++) {
        if (name[i].length > longestName.length)
        console.log(name[i]);
          return (longestName = name[i]);
      }
    })
    
    setLongName(longestName);
    return longestName;
  };
  useEffect(() => {
    findLongName(personName);
  }, [longName]);

  return (
    <div className="grid place-items-center space-y-4">
      <p className="text-center text-4xl text-primary">Arguments</p>
      <h4>{longName}</h4>
    </div>
  );
};

export default DemoRef;
