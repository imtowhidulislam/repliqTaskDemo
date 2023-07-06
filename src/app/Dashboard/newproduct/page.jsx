"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import CartContextProvider from "@/app/context/cartContext";
import Link from "next/link";
import { ButtonOutlined } from "@/app/Util/ButtonOutlined";
import EmptyProduct from "../../../../public/noUser.svg"

const NewProduct = () => {
  const { product } = useContext(CartContextProvider);
  const [newProduct] = product;
  console.log(newProduct);
  return (
    <>
      <div className="z-10 mt-10 grid min-h-custom-min-h grid-cols-productLayout place-items-center md:place-items-start gap-2 overflow-hidden md:mt-0">
        {newProduct.length > 0 ? (
          newProduct.map((product) => {
            const { userId: id, title, desc, category, price, file } = product;

            const descLength = desc.split(" ").slice(0, 5).join(" ");

            const [imageUrl, setImageurl] = useState(null);
            const reader = new FileReader();
            console.log(reader);
            reader.readAsDataURL(file);
            reader.onload = () => {
              setImageurl(reader.result);
            };

            return (
              <div
                key={id}
                className="mb-2 animate-moveUp flex max-w-xs flex-col flex-wrap items-center justify-center gap-2 rounded-md border-2 border-gray-300 p-4 shadow-lg sm:flex-row sm:justify-between sm:gap-1"
              >
                <div className="overflow-hidden rounded border-lime-700">
                  {/*  <Image
                    src={imageUrl}
                    alt={title}
                    width={300}
                    height={250}
                  />  */}
                  <img src={imageUrl} alt="preview" />
                </div>
                <p className="text-sm md:text-base font-bold capitalize text-lime-900">
                  {title}
                </p>
                <p className="break-words text-small font-bold capitalize text-lime-800 sm:text-base">
                  {category}
                </p>
                <div className="mt-2">
                  <p className="break-words text-small font-bold capitalize sm:text-base sm:font-light">
                    {desc.split(" ").length <= 5
                      ? `${descLength}`
                      : `${descLength}...`}
                    <p className="mt-1  break-words text-small font-bold capitalize text-lime-500 sm:text-base">
                      price : {price}$
                    </p>
                  </p>
                </div>
                <div className="mt-4 w-full">
                  <button
                    type="button"
                    onClick={() => handleRemoveUser(id)}
                    className="w-full cursor-pointer rounded-full border-2 border-lime-800 bg-transparent px-4 py-2 text-sm font-bold capitalize text-lime-800 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-lime-900 hover:text-lime-100 hover:drop-shadow-md"
                  >
                    add Product
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid w-full place-items-center overflow-hidden border border-red-100">
            <div className="animate-moveInRight">
              <Image src={EmptyProduct} alt="empty product" width={400} height={400} />
            </div>
            <div className="grid place-items-center">
              <h2 className="py-4 text-center text-2xl font-bold md:text-left">
                Product Not Found.
              </h2>
              <Link href="/Dashboard/addProduct">
                <ButtonOutlined btnText="Add New Product" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewProduct;
