import React from "react";
import Link from "next/link";

const RegisterNav = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between sm:flex-col pt-6 pb-0 md:py-12 gap-4">
        <Link
          className="group w-full rounded-sm bg-transparent border-2 border-lime-800 px-4 md:px-8 py-2 hover:drop-shadow-md transition-all duration-200 ease-in-out hover:bg-lime-100 hover:border-transparent"
          href="/Register"
        >
          <button className="font-bold w-full capitalize text-center group-hover:text-lime-800">
            Sign Up
          </button>
        </Link>
        <Link
          className="group w-full rounded-sm bg-transparent border-2 border-lime-800 px-4 md:px-8 py-2 hover:drop-shadow-md transition-all duration-200 ease-in-out hover:bg-lime-100 hover:border-transparent"
          href="/Register/login"
        >
          <button className="font-bold w-full capitalize text-center group-hover:text-lime-800">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterNav;
