"use client"
import React from "react";

const TextInputField = ( props ) => {
  const {
    type = "",
    name = "",
    id = "",
    values,
    onChange = () => {},
    onBlur = () => {},
    placeholder = "",
    label = "",
    errors,
    touched,
  } = props;
  console.log(props);
  return (
    <>

      <div className="text-nutral2">
        <label className="lableWidth font-bold" htmlFor="first name">
          {label}
        </label>
        <div className="relative ">
          <input
            type={type}
            name={name}
            id={id}
            value={values}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={
              errors && touched
                ? `form border-2 border-denger py-2 pl-4 placeholder:text-sm placeholder:capitalize placeholder:text-gray-900 md:py-1 ${errors && 'mb-5'}`
                : `form py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1 ${errors && 'mb-5'}`
            }
          />
          
          {errors && touched && (
            <p className="absolute left-0 top-[65%] text-small capitalize text-denger md:text-sm">
              {errors}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default TextInputField;
