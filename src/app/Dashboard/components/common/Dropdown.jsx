"use client";
import React, { useEffect, useState } from "react";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardData } from "@/app/Data/dropDownData";

const Dropdown = () => {
  const currPath = usePathname();
  const [path, setPath] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDownData, setDropDownData] = useState(dashboardData);
  

  const handleDropdown = () => {
    setMenuOpen((prev) => !prev);
  };

  const fetchCurrPath = () => {
    const url = currPath.split("/");
    const actualPath = url.splice(-1)[0]
    setPath(actualPath);
  }
  useEffect(() => {
    fetchCurrPath();
  },[currPath])
  
  return (
    <div className="mt-24 md:mt-4">
      <div className="relative w-full mx-auto">
        <button
          className="flex gap-40 items-center  sm:gap-52 w-full min-w-full rounded-md bg-nutral3 px-4 py-3 font-bold capitalize drop-shadow-md focus:text-nutral2"
          onClick={handleDropdown}
        >
          {path === "Dashboard" ? "Product" : `${path}`}
          {menuOpen ? (
            <HiArrowUp className="trasition-all text-nutral2 duration-200 ease-in-out" />
          ) : (
            <HiArrowDown className="transition-all text-nutral2 duration-200 ease-in-out" />
          )}
        </button>
        {menuOpen && (
          <div className="bsolute top-24 mt-2 w-full animate-moveUp rounded-md bg-nutral3 px-4 py-2 text-base font-bold capitalize drop-shadow-md">
            {dropDownData.map((links) => {
              const { id, link, label } = links;
              return (
                <Link onClick={handleDropdown} className="py-3 cursor-pointer hover:bg-baseClr1 " key={id} href={link}>
                  <h3 className="py-2">{label}</h3>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
