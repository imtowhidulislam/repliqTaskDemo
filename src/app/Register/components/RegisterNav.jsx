"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RegisterNav = ({registerRoute,registerType}) => {
  // const getCurrPathOfRegisterRoute = usePathname().split("/").slice(-1)[0].toLowerCase();
  const getCurrPathOfRegisterRoute = usePathname();
  console.log(getCurrPathOfRegisterRoute);
  return (
    <div className="">
      <div className="flex items-center justify-between sm:flex-col pt-6 pb-0 md:py-2 gap-4">
        <Link
          className="group w-max rounded-sm bg-transparent border-2 border-nutral1 px-2 py-1 hover:drop-shadow-md transition-all duration-200 ease-in-out hover:bg-primary hover:border-transparent"
          href={registerRoute}
        >
          <button className="font-bold w-full capitalize text-center text-sm group-hover:text-nutral3">
            {registerType}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterNav;
