"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import CartContextProvider from "@/app/context/cartContext";
import Link from "next/link";
import { ButtonOutlined } from "@/app/Util/ButtonOutlined";
import EmptyProduct from "../../../../public/emptyImg2.svg"

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
                className="mb-2 animate-moveUp flex max-w-xs flex-col flex-wrap items-center justify-center gap-2 rounded-md border-2 border-nutral3 p-4 shadow-xl sm:flex-row sm:justify-between sm:gap-1"
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
                <p className="text-sm mt-2 md:text-xl font-bold capitalize text-nutral2">
                  {title}
                </p>
                <p className="break-words text-small font-extrabold capitalize text-nutral2 sm:text-base">
                  {category}
                </p>
                <div className="mt-2">
                  <p className="break-words text-small font-bold capitalize text-nutral2 sm:text-base sm:font-bold mb-2">
                    {desc.split(" ").length <= 5
                      ? `${descLength}`
                      : `${descLength}...`}
                    <p className="mt-1  break-words text-small font-bold capitalize text-primary sm:text-xl">
                      {price}$
                    </p>
                  </p>
                </div>
                <div className="mt-4 w-full drop-shadow-md shadow-nutral2">
                  <button
                    type="button"
                    onClick={() => handleRemoveUser(id)}
                    className="w-full cursor-pointer rounded-full border-2 border-nutral2 bg-transparent px-4 py-2 text-sm font-bold capitalize text-nutral2 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-baseClr1 hover:text-primary hover:drop-shadow-lg "
                  >
                    add Product
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid w-full place-items-center overflow-hidden ">
            <div className="animate-moveInRight">
              <Image src={EmptyProduct} alt="empty product" width={400} height={400} />
            </div>
            <div className="grid place-items-center">
              <h2 className="py-4 text-center text-2xl font-bold md:text-left">
                Product Not Found.
              </h2>
              <Link className="w-full drop-shadow-md shadow-nutral2" href="/Dashboard/addProduct">
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
