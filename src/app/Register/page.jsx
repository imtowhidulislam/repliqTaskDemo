"use client";
import React, { useContext, useRef, useState } from "react";
import { RiShoppingBagFill, RiImage2Fill } from "react-icons/ri";
import { useFormik } from "formik";
import { formSchema } from "../Register/schemas/page";
import toast from "react-hot-toast";
import CartContextProvider from "../context/cartContext";
import RegisterNav from "./components/RegisterNav";

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
          className="registerForm w-full max-w-md animate-moveUp overflow-hidden rounded-md border border-gray-200 bg-nutral3 px-4 pb-6 pt-0 shadow-nutral2 drop-shadow-lg sm:mx-0 md:mx-4 md:my-8"
        >
          <div className="flex items-center justify-center pb-1 text-6xl text-cyan-700"></div>
          <div className="pb-2">
            <h2 className="text-center text-2xl font-bold uppercase text-nutral2">
              sign up
            </h2>
          </div>

          <div className="text-nutral2">
            <label className="lableWidth font-bold " htmlFor="first name">
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
                    ? "form border-2 border-denger py-2 pl-4 placeholder:text-sm placeholder:capitalize placeholder:text-gray-900 md:py-1"
                    : "form py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                }
              />
              {errors.fName && touched.fName && (
                <p className="absolute left-0 top-full text-small capitalize text-denger md:text-sm">
                  {errors.fName}
                </p>
              )}
            </div>
          </div>

          <div className="text-nutral2">
            <label className="lableWidth font-bold capitalize " htmlFor="desc">
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
                    ? "form border-2 border-denger py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                    : "form py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                }
                placeholder="enter your last Name"
              />
              {errors.lName && touched.lName && (
                <p className="absolute left-0 top-full text-small capitalize text-denger md:text-sm">
                  {errors.lName}
                </p>
              )}{" "}
            </div>
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
            <label className="lableWidth font-bold capitalize " htmlFor="image">
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
                    ? "form hidden border-2 border-denger py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                    : "form hidden py-2 pl-4 placeholder:text-sm placeholder:capitalize md:py-1"
                }
                placeholder="enter product Image"
              />
              <button
                onClick={handleImg}
                className="font-semibnold flex w-full items-center justify-start gap-2 rounded-md bg-slate-300/30 py-2 pl-4 text-left text-sm capitalize text-gray-400 md:py-1"
              >
                <RiImage2Fill className="text-xl text-primary md:text-3xl" />{" "}
                Upload Image{" "}
              </button>
              {errors.file && touched.file && (
                <p className="absolute left-0 top-full text-small capitalize text-denger md:text-sm">
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
              sign up
            </button>
          </div>

          {/* <div><p className='capitalize text-gray-300'>{account}<span><button type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div> */}
          <div className="flex items-center gap-3 justify-center">
            <p className="text-primary">Already have an account? </p>
            <span>
              <RegisterNav
                registerRoute="/Register/login"
                registerType="sign in"
              />
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
