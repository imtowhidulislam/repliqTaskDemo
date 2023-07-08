import React, { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useProductData } from "../../Data/productData";
import { toast } from "react-hot-toast";
import CartContextProvider from "@/app/context/cartContext";
import Loading from "@/app/product/loading";

const HomeTopratedProduct = () => {
  const { cart } = useContext(CartContextProvider);
  // const { data, isLoading, error: error } = useProductData();
  const [topRate, setTopRate] = useState([]);
  const [cartValue, setCartValue] = cart;

  // ?? Fetching Data use TanStack Query...
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw new Error("Url might be not found.");

    const topProducts = data?.filter((item) => item.rating.rate >= 4.0);

    // !! Sorting Top Rated Item By Accending order..
    const sortTopRatedArray = topProducts.sort((a,b) => a.rating.rate - b.rating.rate); 
    setTopRate(sortTopRatedArray);

    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["productData"],
    queryFn: fetchData,
  });

  const addToCart = (id) => {
    try {
      const fetchCartItem = data?.find((item) => {
        item.quantity = 1;
        return item.id === id;
      });
      setCartValue((prevItem) => [...prevItem, fetchCartItem]);

      cartValue.find((item) => item.id === id && (item.quantity += 1));

      toast.success("Product Added");
    } catch (error) {
      toast.error("Product not found");
    }
  };

  if (error) return "Url might not be found" + error.message;
  console.log(topRate);

  return (
    <div>
      <div>
        <div className="container py-20">
          <div className="mb-8 md:mb-12 px-4 sm:px-0">
            <h2 className={isLoading ? "bg-gradient-to-r from-accent to-primary bg-clip-text text-xl font-extrabold uppercase text-transparent md:text-5xl animate-pulse" : "bg-gradient-to-r from-accent to-primary bg-clip-text text-xl font-extrabold uppercase text-transparent md:text-5xl"}>
              Top Rated Product
            </h2>
          </div>
          {isLoading ? (
            <h2 className="text-center text-2xl font-bold">Loading...</h2>
          ) : (
            <div className="grid w-full grid-cols-productLayout px-4 ms:px-0 place-items-start gap-4 overflow-hidden sm:grid-cols-productLayoutTop">
              {topRate?.map((topProduct) => {
                const { id, title, price, rating, image } = topProduct;
                const titleLength = title.split(" ").slice(0, 5).join(" ");
                return (
                  <div
                    key={id}
                    className="card bg-nutral3 z-10 flex h-full animate-moveUp flex-col items-center justify-between gap-2"
                  >
                    <Link href={`/Product/${id}`} className="">
                      <div>
                        <div className="m-auto mb-4 h-60 max-w-md p-4">
                          <Image
                            className="objece-center aspect-square block h-60 object-cover"
                            src={image}
                            alt=""
                            width={350}
                            height={300}
                          />
                        </div>
                        <div className="z-20 px-4 pb-4 pt-2 text-nutral2">
                          <div>
                            <h2 className="font-extrabold">
                              Name :{" "}
                              {title.split(" ").length <= 5
                                ? `${titleLength}`
                                : `${titleLength}...`}
                            </h2>
                          </div>
                          <div className="flex items-center justify-between gap-4 py-2 ">
                            <h2>
                              <p className="text-base font-extrabold text-primary">
                                $ {price}
                              </p>
                            </h2>
                            <p className="text-nutra2 font-bold">
                              Rating :{" "}
                              <span className="text-base font-extrabold text-primary">
                                {rating.rate}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="flex w-full items-center justify-between px-4 pb-4">
                      <button
                        type="button"
                        onClick={() => addToCart(id)}
                        className="w-full cursor-pointer rounded-md border-2 border-nutral2  bg-transparent px-4 py-2 text-sm font-bold capitalize text-nutral2 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-accent hover:text-nutral3 hover:drop-shadow-md"
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeTopratedProduct;
