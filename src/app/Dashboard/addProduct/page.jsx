"use client";
import React, { useContext, useState } from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import CartContextProvider from "@/app/context/cartContext";
import { useProductData } from "@/app/Data/productData";
import { productSchema } from "@/app/Register/schemas/page";
import NewProductProviderContext from "@/app/context/newProduct";

const page = () => {
  const { data, isLoading, error } = useProductData();
  const {product} = useContext(CartContextProvider);
  const [newProduct, setNewProduct] = product;


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
      title: "",
      desc: "",
      price: null,
      file: null,
      category: "",
    },
    validationSchema: productSchema,
    onSubmit: async (
      values,
      { resetForm }
    ) => {
      const userId = new Date().getTime().toString();
      const addNewProduct = { ...values, userId };
      setNewProduct([...newProduct, addNewProduct]);
      console.log(values);
      console.log(values.file.name);
      resetForm();
      toast.success("New Product Added");
    },
  });

  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center bg-contact-image bg-cover bg-center bg-no-repeat  before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[rgba(10,46,16,0.57)] before:backdrop-blur-sm">
        <form
          onSubmit={handleSubmit}
          className="registerForm md:mx-4 md:my-8 w-full max-w-md animate-moveUp overflow-hidden rounded-md border border-gray-200 bg-[#14141483] px-4 pb-6 pt-0 backdrop-blur-md backdrop-filter sm:mx-0"
        >
          <div className="flex items-center justify-center pb-1 text-6xl text-cyan-700"></div>
          <div className="pb-2">
            <h2 className="text-center text-xl font-bold uppercase text-[#ffff]">
              Create Product
            </h2>
          </div>

          <div className="">
            <label
              className="lableWidth font-bold text-gray-100"
              htmlFor="first name"
            >
              First Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="enter product title"
                className={
                  errors.title && touched.title
                    ? "form border-2 border-red-500 pl-4 placeholder:capitalize placeholder:text-gray-900"
                    : "form pl-4 placeholder:capitalize "
                }
              />
              {errors.title && touched.title && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-red-300">
                  {errors.title}
                </p>
              )}
            </div>
          </div>

          <div className="">
            <label
              className="lableWidth font-bold capitalize text-gray-100"
              htmlFor="desc"
            >
              desc
            </label>
            <div className="relative">
              <input
                type="text"
                name="desc"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.desc}
                className={
                  errors.desc && touched.desc
                    ? "form border-2 border-red-500 pl-4 placeholder:capitalize"
                    : "form pl-4 placeholder:capitalize"
                }
                placeholder="enter product desc"
              />
              {errors.desc && touched.desc && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-red-300">
                  {errors.desc}
                </p>
              )}{" "}
            </div>
          </div>
          <div className="">
            <label
              className="lableWidth font-bold capitalize text-gray-100"
              htmlFor="price"
            >
              price
            </label>
            <div className="relative">
              <input
                type="number"
                name="price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                className={
                  errors.price && touched.price
                    ? "form border-2 border-red-500 pl-4 placeholder:capitalize"
                    : "form pl-4 placeholder:capitalize"
                }
                placeholder="enter product price"
              />
              {errors.price && touched.price && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-red-300">
                  {errors.price}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <label
              className="lableWidth font-bold capitalize text-gray-100"
              htmlFor="image"
            >
              Image
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                // name="file"
                onBlur={handleBlur}
                onChange={(e) => setFieldValue("file", e.target.files[0])}
                className={
                  errors.file && touched.file
                    ? "form border-2 border-red-500 pl-4 placeholder:capitalize"
                    : "form pl-4 placeholder:capitalize"
                }
                placeholder="enter product Image"
              />
              {errors.file && touched.file && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-red-300">
                  {errors.file}
                </p>
              )}
            </div>
          </div>
        <div className="">
          <label
            className="lableWidth font-bold capitalize text-gray-100"
            htmlFor="categor"
          >
            Category
          </label>
          <div className="relative">
            <input
              type="text"
              name="category"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.category}
              className={
                errors.category && touched.category
                  ? "form border-2 border-red-500 pl-4 placeholder:capitalize"
                  : "form bg-transparent pl-4 placeholder:capitalize"
              }
              placeholder="enter product category"
            />
            {errors.category && touched.category && (
              <p className="absolute left-0 top-full text-small md:text-sm capitalize text-red-300">
                {errors.category}
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
              submit
            </button>
          </div>

          {/* <div><p className='capitalize text-gray-300'>{account}<span><button type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div> */}
        </form>
      </div>
    </>
  );
};

export default page;
