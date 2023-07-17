"use client";
import React, { useContext, useRef, useState } from "react";
import { RiShoppingBagFill,RiImage2Fill } from "react-icons/ri";
import { useFormik } from "formik";
import { formSchema } from "../Register/schemas/page";
import toast from "react-hot-toast";
import CartContextProvider from "../context/cartContext";

const page = () => {
  const imgRef = useRef(null);
  const { user } = useContext(CartContextProvider);
  const [users, setUsers] = user;

  const {
    values,
    setFieldValue,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      file: null,
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: async (
      { fName, lName, email, password, file },
      { resetForm }
    ) => {
      const userId = new Date().getTime().toString();
      const newUser = { ...values, userId };
      setUsers([...users, newUser]);
      resetForm();
      toast.success("Submitted successfully");
    },
  });

  const handleImg = () => imgRef.current.click();
  
  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center overflow-y-hidden">
        <form
          onSubmit={handleSubmit}
          className="registerForm md:mx-4 drop-shadow-lg shadow-nutral2 md:my-8 w-full max-w-md animate-moveUp overflow-hidden rounded-md border border-gray-200 bg-nutral3 px-4 pb-6 pt-0 sm:mx-0"
        >
          <div className="flex items-center justify-center pb-1 text-6xl text-cyan-700"></div>
          <div className="pb-2">
            <h2 className="text-center text-2xl font-bold uppercase text-nutral2">
              sign up
            </h2>
          </div>

          <div className="text-nutral2">
            <label
              className="lableWidth font-bold "
              htmlFor="first name"
            >
              First Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="fName"
                id="title"
                value={values.fName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="enter your name"
                className={
                  errors.fName && touched.fName
                    ? "form py-1 border-2 border-denger pl-4 placeholder:text-sm placeholder:capitalize placeholder:text-gray-900"
                    : "form py-1 pl-4 placeholder:capitalize placeholder:text-sm"
                }
              />
              {errors.fName && touched.fName && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-denger">
                  {errors.fName}
                </p>
              )}
            </div>
          </div>

          <div className="text-nutral2">
            <label
              className="lableWidth font-bold capitalize "
              htmlFor="desc"
            >
              last name
            </label>
            <div className="relative">
              <input
                type="text"
                name="lName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lName}
                className={
                  errors.lName && touched.lName
                    ? "form placeholder:text-sm py-1 border-2 border-denger pl-4 placeholder:capitalize"
                    : "form placeholder:text-sm py-1 pl-4 placeholder:capitalize"
                }
                placeholder="enter your last Name"
              />
              {errors.lName && touched.lName && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-denger">
                  {errors.lName}
                </p>
              )}{" "}
            </div>
          </div>
          <div className="text-nutral2">
            <label
              className="lableWidth font-bold capitalize "
              htmlFor="email"
            >
              email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                className={
                  errors.email && touched.email
                    ? "form placeholder:text-sm py-1 border-2 border-denger pl-4 placeholder:capitalize"
                    : "form placeholder:text-sm py-1 pl-4 placeholder:capitalize"
                }
                placeholder="enter your email"
              />
              {errors.email && touched.email && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-denger">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="text-nutral2">
            <label
              className="lableWidth font-bold capitalize "
              htmlFor="image"
            >
              Image
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                ref={imgRef}
                // name="file"
                onBlur={handleBlur}
                onChange={(e) => setFieldValue("file", e.target.files[0])}
                className={
                  errors.file && touched.file
                    ? "form placeholder:text-sm hidden py-1 border-2 border-denger pl-4 placeholder:capitalize"
                    : "form placeholder:text-sm hidden py-1 pl-4 placeholder:capitalize"
                }
                placeholder="enter product Image"
              />
              <button onClick={handleImg} className="capitalize text-gray-400 font-semibnold bg-slate-300/30 flex items-center justify-start gap-2 text-sm rounded-md py-1 pl-4 w-full text-left"><RiImage2Fill className="text-3xl text-primary" /> Upload Image </button>
              {errors.file && touched.file && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-denger">
                  {errors.file}
                </p>
              )}
            </div>
          </div>
        <div className="text-nutral2">
          <label
            className="lableWidth font-bold capitalize "
            htmlFor="password"
          >
            password
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              className={
                errors.password && touched.password
                  ? "form placeholder:text-sm py-1 border-2 border-denger pl-4 placeholder:capitalize"
                  : "form placeholder:text-sm py-1 bg-transparent pl-4 placeholder:capitalize"
              }
              placeholder="enter your password"
            />
            {errors.password && touched.password && (
              <p className="absolute left-0 top-full text-small md:text-sm capitalize text-denger">
                {errors.password}
              </p>
            )}
          </div>
        </div>

          <div className="mt-4 md:mt-12 w-full">
            <button
              type="submit"
              // onClick={handleSubmit}
              className="w-full cursor-pointer rounded-md border-2 border-nutral1 bg-transparent px-8 py-2 text-base font-bold capitalize text-nutral2 transition-all duration-200 ease-out hover:border-transparent hover:bg-accent hover:text-nutral2"
            >
              sign up
            </button>
          </div>

          {/* <div><p className='capitalize text-gray-300'>{account}<span><button type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div> */}
        </form>
      </div>
    </>
  );
};

export default page;
