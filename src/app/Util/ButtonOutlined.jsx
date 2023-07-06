import React from "react";

export const ButtonOutlined = ({btnText, actionFunc, id}) => {
  return (
    <>
      <button
        type="button"
        className="capitalize w-max font-bold text-sm text-lime-800 border-2 border-lime-800 bg-transparent cursor-pointer py-2 px-4 rounded-full hover:drop-shadow-md transition-all duration-200 ease-in-out hover:text-lime-100 hover:border-transparent hover:bg-lime-900"
      >
        {btnText}
      </button>
    </>
  );
};

export const ButtonFilled = ({btnText}) => {
  return (
    <>
      <button
        type="button"
        className="capitalize w-max font-bold text-sm text-lime-100 border-2 hover:border-lime-800 hover:bg-transparent cursor-pointer py-2 px-4 rounded-full hover:drop-shadow-md transition-all duration-200 ease-in-out hover:text-lime-800 border-transparent bg-lime-900"
      >
        {btnText}
      </button>
    </>
  );
};
