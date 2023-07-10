import React from "react";

export const ButtonOutlined = ({btnText, actionFunc, id}) => {
  return (
    <>
      <button
        type="button"
        className="capitalize w-full font-bold text-sm text-nutral2 border-2 border-nutral2 bg-transparent cursor-pointer py-2 px-4 rounded-full hover:drop-shadow-md transition-all duration-200 ease-in-out hover:text-nutral3 hover:border-transparent hover:bg-primary"
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
        className="capitalize w-full font-bold text-sm text-nutral3 border-2 hover:border-primary hover:bg-transparent cursor-pointer py-2 px-4 rounded-full hover:drop-shadow-md transition-all duration-200 ease-in-out hover:text-nutral2 border-transparent bg-primary"
      >
        {btnText}
      </button>
    </>
  );
};
