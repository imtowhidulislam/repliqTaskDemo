"use client";
import React, { useContext, useState } from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { loginSchema } from "../schemas/page";
import RegisterNav from "../components/RegisterNav";

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
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      toast.success("Submitted successfully");
    },
  });

  return (
    <>
      <div className="relative flex h-full w-full items-start justify-start overflow-y-hidden md:justify-center">
        <form
          onSubmit={handleSubmit}
          className="registerForm w-full max-w-md animate-moveUp overflow-hidden rounded-md border border-gray-200 bg-nutral3 px-4 pb-6 pt-0 shadow-nutral2 drop-shadow-lg sm:mx-0 md:mx-4 md:my-8"
        >
          <div className="flex items-center justify-center pb-1 text-6xl text-cyan-700"></div>
          <div className="pb-2">
            <h2 className="text-center text-2xl font-bold uppercase text-nutral2">
              Sign in
            </h2>
          </div>

          <div className="text-nutral2">
            <label className="lableWidth font-bold capitalize " htmlFor="email">
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
                    ? "form border-2 border-denger py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                    : "form py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                }
                placeholder="enter your email"
              />
              {errors.email && touched.email && (
                <p className="absolute left-0 top-full text-small capitalize text-denger md:text-sm">
                  {errors.email}
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
                    ? "form border-2 border-denger py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                    : "form bg-transparent py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                }
                placeholder="enter your password"
              />
              {errors.password && touched.password && (
                <p className="absolute left-0 top-full text-small capitalize text-denger md:text-sm">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 w-full md:mt-12">
            <button
              type="submit"
              // onClick={handleSubmit}
              className="w-full cursor-pointer rounded-md border-2 border-nutral1 bg-transparent px-8 py-2 text-base font-bold capitalize text-nutral2 transition-all duration-200 ease-out hover:border-transparent hover:bg-accent hover:text-nutral2"
            >
              sign in
            </button>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <p className="text-nutral2">Don't have any account? </p>
            <span>
              <RegisterNav registerRoute="/Register" registerType="sign up" />
            </span>
          </div>
          {/* <div><p className='capitalize text-gray-300'>{account}<span><button type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div> */}
        </form>
      </div>
    </>
  );
};

export default page;
