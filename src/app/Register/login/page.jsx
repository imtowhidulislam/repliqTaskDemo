"use client";
import React, { useContext, useState } from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { loginSchema } from "../schemas/page";

const page = () => {
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
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (value, { resetForm }) => {
      resetForm();
      toast.success("Submitted successfully");
    },
  });

  return (
    <>
      <div className="relative flex h-full md:min-h-custom-h-form w-full items-center justify-center overflow-hidden bg-contact-image bg-cover bg-center bg-no-repeat  before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[rgba(10,46,16,0.57)] before:backdrop-blur-sm">
        <form
          onSubmit={handleSubmit}
          className="registerForm md:mx-4 my-4 md:my-8 w-full max-w-md animate-moveUp overflow-hidden rounded-md border border-gray-200 bg-[#14141483] px-4 py-6 backdrop-blur-md backdrop-filter sm:mx-0"
        >
          <div className="pb-2">
            <h2 className="text-center text-xl font-bold uppercase text-[#ffff]">
              sign in
            </h2>
          </div>

          <div className="">
            <label
              className="lableWidth font-bold capitalize text-gray-100"
              htmlFor="email"
            >
              Email
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
                    ? "form border-2 border-red-500 pl-4 placeholder:capitalize"
                    : "form pl-4 placeholder:capitalize"
                }
                placeholder="enter your email"
              />
              {errors.email && touched.email && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-red-300">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="">
            <label
              className="lableWidth font-bold capitalize text-gray-100"
              htmlFor="password"
            >
              Password
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
                    ? "form border-2 border-red-500 pl-4 placeholder:capitalize"
                    : "form bg-transparent pl-4 placeholder:capitalize"
                }
                placeholder="enter you password"
              />
              {errors.password && touched.password && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-red-300">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 md:mt-12 w-full">
            <button
              type="submit"
              // onClick={handleSubmit}
              className="w-full cursor-pointer rounded-md border-2 border-lime-700 bg-transparent px-8 py-2 text-base font-bold capitalize text-lime-100 transition-all duration-200 ease-out hover:border-transparent hover:bg-lime-700 hover:text-lime-100"
            >
              sign in
            </button>
          </div>

          {/* <div><p className='capitalize text-gray-300'>{account}<span><button type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div> */}
        </form>
      </div>
    </>
  );
};

export default page;
