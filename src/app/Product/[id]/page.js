"use client";
import { ButtonFilled, ButtonOutlined } from "@/app/Util/ButtonOutlined";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { HiHeart, HiStar } from "react-icons/hi2";
import CartContextProvider from "@/app/context/cartContext";
import { HiShoppingCart } from "react-icons/hi";
import { toast } from "react-hot-toast";

const ProductDetailsPage = ({ params }) => {
  const { cart } = useContext(CartContextProvider);
  const [myCart, setMyCart] = cart;
  const productId = +params.id;
  const [product, setProduct] = useState([]);
  const [uniqueItem, setUniqueItem] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw Error("Url might be not found.");

    const fetchSingleProduct = data.find((item) => item.id === productId);
    setUniqueItem([fetchSingleProduct]);
    setProduct([data]);

    return data;
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: fetchData,
  });

  if (error) return "Product not Found!!" + error.message;

  const getProduct = (id) => {
    try {
      let quantity = 0;
      /* const checkProductInThere = cart.find(item => item.id === id ? item.quantity =+ 1 : (product.find((item) => {
        item.quantity = 1;
        return item.id === id;
      }))) */
      const checkProductIsThere = data?.find((item) => {
        item.quantity = 1;
        return item.id === id;
      });
      console.log(checkProductIsThere);
      setMyCart((prevItem) => [...prevItem, checkProductIsThere]);

      cart.find((item) => item.id === id && (item.quantity += 1));

      toast.success("Product Added");
    } catch (error) {
      toast.error("product not found");
    }
  };
  return (
    <div className="min-h-custom-h-form">
      <div className="container ">
        <>
          {uniqueItem?.map((singleProduct) => {
            const {
              id,
              title,
              description: desc,
              image: img,
              price,
              rating,
              category: cat,
            } = singleProduct;

            const titleLength = title.split(" ").slice(0, 5).join(" ");
            return (
              <div key={id} className="my-20 min-h-custom-h-form">
                <div className="grid grid-cols-productLayout gap-4">
                  <div className="grid animate-moveInLeft place-items-center rounded-md bg-nutral3 drop-shadow-lg">
                    <Image
                      className="m-4 aspect-square rounded-md bg-gray-100 object-cover object-center"
                      src={img}
                      alt=""
                      width={400}
                      height={400}
                    />
                    <div className="items-cener my-4 flex  justify-between gap-3">
                      <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-sm bg-baseClr1 p-1">
                        <Image
                          className="aspect-square object-cover object-center"
                          src={img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-sm bg-baseClr1 p-1">
                        <Image
                          className="aspect-square object-cover object-center"
                          src={img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-sm bg-baseClr1 p-1">
                        <Image
                          className="aspect-square object-cover object-center"
                          src={img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="z-20  flex items-start flex-col justify-center animate-moveInRight px-4 pb-4 pt-4 text-gray-700">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {" "}
                        {title.split(" ").length <= 5
                          ? `${titleLength}`
                          : `${titleLength}...`}
                      </h2>
                    </div>
                    <h2 className="text-pimary capitalize max-w-lg text-xl font-semibold text-nutral2">
                      {cat}
                    </h2>
                    <div className="py-2">
                      <h2 className="py-4 font-semibold text-nutral2">
                        <span className="line-clamp-4">{desc}</span>
                      </h2>
                      <h2 className="pb-2">
                        {" "}
                        <span className="text-2xl font-bold text-primary">
                          {price}$
                        </span>
                      </h2>
                      <p className="flex items-center justify-start gap-2">
                        {" "}
                        <span className="text-2xl font-bold text-primary">
                          {rating.rate}
                        </span>
                          <HiStar className='text-yellow-500 text-2xl font-bold'/>
                      </p>
                    </div>

                    <div className="items-justify-center mt-4 flex w-full  gap-4 ">
                      <button
                        type="button"
                        onClick={() => getProduct(id)}
                        className="group flex max-w-sm w-full cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-nutral2 bg-transparent  px-4 py-2 text-sm font-bold capitalize text-nutral2 drop-shadow-lg transition-all duration-200 ease-in-out hover:border-transparent hover:bg-baseClr1 hover:text-primary hover:drop-shadow-md"
                      >
                        add to cart{" "}
                        <span>
                          <HiShoppingCart className="text-2xl text-accent group-hover:animate-cartAnimate" />
                        </span>
                      </button>
                      <Link
                        className="group grid w-24 place-items-center rounded-md border border-nutral2 text-2xl text-denger shadow-nutral2 drop-shadow-md "
                        href="/Cart"
                      >
                        <HiHeart className="group-hover:animate-bounce" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
