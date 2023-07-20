import React, { Children } from "react";

const FileInputField = (props) => {
  const {
    type = "",
    btnLabel = "",
    label = "",
    name="",
    imgRef,
    children,
    onBlur = () => {},
    onChange = () => {},
    errors,
    touched,
  } = props;
  const handleImg = () => imgRef.current.click();
  console.log(props);

  return (
    <>
      <div className="text-nutral2">
        <label className="lableWidth font-bold capitalize " htmlFor="image">
          {label}
        </label>
        <div className="relative">
          <input
            type={type}
            accept="image/*"
            ref={imgRef}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            className="hidden "
            placeholder="enter product Image"
          />
          <button
            onClick={handleImg}
            className={
              errors && touched
                ? `form border-2 border-denger placeholder:text-sm placeholder:capitalize font-semibnold flex w-full items-center justify-start gap-2 rounded-md bg-baseClr1 py-2 pl-4 text-left text-sm capitalize text-gray-400 md:py-1 ${errors && 'mb-5'}`
                : `form placeholder:text-sm placeholder:capitalize font-semibnold flex w-full items-center justify-start gap-2 rounded-md bg-baseClr1 py-2 pl-4 text-left text-sm capitalize text-gray-400 md:py-1 ${errors && 'mb-5'}`
            }
          >
            {/* <RiImage2Fill className="text-xl text-primary md:text-3xl" />{" "} */}
            {children}
            {btnLabel}
          </button>
          {errors && touched && (
            <p className="absolute mb-2 left-0 top-[92%] text-small capitalize text-denger md:text-sm">
              {errors}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FileInputField;
