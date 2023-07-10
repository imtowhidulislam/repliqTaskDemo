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
      <div className="relative flex h-full w-full items-center justify-center overflow-y-hidden">
        <form
          onSubmit={handleSubmit}
          className="registerForm md:mx-4 drop-shadow-lg shadow-nutral2 md:my-8 w-full max-w-md animate-moveUp overflow-hidden rounded-md border border-gray-200 bg-nutral3 px-4 pb-6 pt-0 sm:mx-0"
        >
          <div className="flex items-center justify-center pb-1 text-6xl text-cyan-700"></div>
          <div className="pb-2">
            <h2 className="text-center text-2xl font-bold uppercase text-accent">
              Create Product
            </h2>
          </div>

          <div className="text-nutral2">
            <label
              className="lableWidth font-bold "
              htmlFor="name"
            >
              Name
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
                    ? "form text-nutral2 py-1 border-2 border-denger pl-4 placeholder:capitalize placeholder:text-gray-900"
                    : "form text-nutral2 py-1 pl-4 placeholder:capitalize "
                }
              />
              {errors.title && touched.title && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-denger">
                  {errors.title}
                </p>
              )}
            </div>
          </div>

          <div className="text-nutral2">
            <label
              className="lableWidth font-bold capitalize "
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
                    ? "form text-nutral2 py-1 border-2 border-denger pl-4 placeholder:capitalize"
                    : "form text-nutral2 py-1 pl-4 placeholder:capitalize"
                }
                placeholder="enter product desc"
              />
              {errors.desc && touched.desc && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-denger">
                  {errors.desc}
                </p>
              )}{" "}
            </div>
          </div>
          <div className="text-nutral2">
            <label
              className="lableWidth font-bold capitalize "
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
                    ? "form text-nutral2 py-1 border-2 border-denger pl-4 placeholder:capitalize"
                    : "form text-nutral2 py-1 pl-4 placeholder:capitalize"
                }
                placeholder="enter product price"
              />
              {errors.price && touched.price && (
                <p className="absolute left-0 top-full text-small md:text-sm capitalize text-denger">
                  {errors.price}
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
                // name="file"
                onBlur={handleBlur}
                onChange={(e) => setFieldValue("file", e.target.files[0])}
                className={
                  errors.file && touched.file
                    ? "form text-nutral2 py-1 border-2 border-denger pl-4 placeholder:capitalize"
                    : "form text-nutral2 py-1 pl-4 placeholder:capitalize"
                }
                placeholder="enter product Image"
              />
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
                  ? "form text-nutral2 py-1 border-2 border-denger pl-4 placeholder:capitalize"
                  : "form text-nutral2 py-1 bg-transparent pl-4 placeholder:capitalize"
              }
              placeholder="enter product category"
            />
            {errors.category && touched.category && (
              <p className="absolute left-0 top-full text-small md:text-sm capitalize text-denger">
                {errors.category}
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
