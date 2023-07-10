"use client";
import { ButtonFilled, ButtonOutlined } from "@/app/Util/ButtonOutlined";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ProductDetailsPage = ({ params }) => {
  console.log(+params.id);
  const productId = +params.id;
  const [product, setProduct] = useState([]);
  const [uniqueItem, setUniqueItem] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw Error("Url might be not found.");

    const fetchSingleProduct = data.find((item) => item.id === productId);
    console.log(fetchSingleProduct);
    setUniqueItem([fetchSingleProduct]);

    return data;
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["singleProduct"],
    queryFn: fetchData,
  });

  if (error) return "Product not Found!!" + error.message;

  const getProduct = (id) => {
    const fetchCartItem = product.find((item) => item.id === productId);
    console.log(fetchCartItem);
    setUniqueItem([fetchCartItem]);
    // setCart(prevValue => [...prevValue, fetchCartItem]);
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
                  <div className="grid animate-moveInLeft drop-shadow-lg place-items-center rounded-md bg-nutral3">
                    <Image
                      className="m-4 block rounded-md bg-gray-100 aspect-square object-cover object-center"
                      src={img}
                      alt=""
                      width={400}
                      height={350}
                    />
                    <div className="items-cener my-4 flex  justify-between gap-3">
                      <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-sm bg-baseClr1 p-1">
                        <Image
                          className="object-cover object-center aspect-square"
                          src={img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-sm bg-baseClr1 p-1">
                        <Image
                          className="object-cover aspect-square object-center"
                          src={img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-sm bg-baseClr1 p-1">
                        <Image
                          className="object-cover object-center aspect-square"
                          src={img}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="z-20 animate-moveInRight px-4 pb-4 pt-4 text-gray-700">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {" "}
                        {title.split(" ").length <= 5
                          ? `${titleLength}`
                          : `${titleLength}...`}
                      </h2>
                    </div>
                    <h2 className="max-w-lg text-xl font-bold text-pimary">{cat}</h2>
                    <div className="py-2">
                      <h2 className="max-w-md py-4">
                        <span className="">{desc}$</span>
                      </h2>
                      <h2 className="pb-4">
                        {" "}
                        <span className="font-bold text-primary text-2xl">
                          {price}$
                        </span>
                      </h2>
                      <p>
                        {" "}
                        <span className="font-bold text-primary text-2xl">
                          {rating.rate}
                        </span>
                      </p>
                    </div>
                    
                    <div className="mt-8 flex w-max gap-4 px-2 pb-4">
                      <Link href="/Cart">
                        <ButtonFilled btnText="view cart" />
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
