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
            className={
              errors && touched
                ? "form hidden border-2 border-denger py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                : "form hidden py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
            }
            placeholder="enter product Image"
          />
          <button
            onClick={handleImg}
            className="font-semibnold flex w-full items-center justify-start gap-2 rounded-md bg-slate-300/30 py-2 pl-4 text-left text-sm capitalize text-gray-400 md:py-1"
          >
            {/* <RiImage2Fill className="text-xl text-primary md:text-3xl" />{" "} */}
            {children}
            {btnLabel}
          </button>
          {errors && touched && (
            <p className="absolute left-0 top-full text-small capitalize text-denger md:text-sm">
              {errors}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FileInputField;
