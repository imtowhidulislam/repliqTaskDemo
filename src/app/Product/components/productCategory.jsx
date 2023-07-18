"use client";
import React, { useState, useEffect } from "react";
// import Button from "../../Util/Button"
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Loading from "../loading";
import FavoriteBtn from "./FavoriteBtn";
import { HiShoppingCart } from "react-icons/hi";

const ProductCategory = ({
  product,
  cart,
  isLoading,
  setCart,
  setProduct,
  filterProduct,
}) => {
  const [filterProductData, setFilterProductData] = useState([]);

  const filterCategory = () => {
    const fetchFilterProduct = product.filter((cat) => {
      return cat.category === filterProduct;
    });
    setFilterProductData(fetchFilterProduct);
  };
  useEffect(() => {
    filterCategory();
  }, [filterProduct]);

  const getProduct = (id) => {
    try {
      // const fetchCartItem = product.find((item) => item.id === id);
      // setCart((prevValue) => [...prevValue, fetchCartItem]);

      const checkProductInThere = product.find((item) => {
        item.quantity = 1;
        return item.id === id;
      });
      setCart((prevItem) => [...prevItem, checkProductInThere]);

      cart.find((item) => item.id === id && (item.quantity += 1));

      toast.success("Product Added");
    } catch (error) {
      toast.error("Product not found");
    }
  };

  return (
    <>
      {isLoading ? (
        <h2 className="text-3xl font-bold text-lime-800">Fetching Data...</h2>
      ) : (
        filterProductData?.map((singleProduct) => {
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
            <div
              key={id}
              className="card relative z-10 flex h-full animate-moveUp flex-col items-center justify-between gap-2 bg-nutral3 hover:bg-[#f5f5f5] transition-colors ease-in-out duration-100"
            >
              <div className="absolute left-3/4 top-3">
                <FavoriteBtn />
              </div>
              <Link href={`/Product/${id}`} className="">
                <div>
                  <div className="m-auto mb-4 h-60 max-w-xs p-4">
                    <Image
                      className="objece-center block aspect-square h-60 object-cover"
                      src={img}
                      alt=""
                      width={300}
                      height={400}
                    />
                  </div>
                  <div className="z-20 px-4 pb-4 pt-2 text-nutral2">
                    <div>
                      <h2 className="sm:text-lg">
                        {" "}
                        {title.split(" ").length <= 5
                          ? `${titleLength}`
                          : `${titleLength}...`}
                      </h2>
                    </div>

                    <h2 className="mt-2 text-xl font-bold uppercase">{cat}</h2>
                    <div className="flex items-center justify-between gap-4 py-2">
                      <h2>
                        {" "}
                        <span className="text-xl font-bold text-primary">
                          {price}$
                        </span>
                      </h2>
                      <p className="text-base">
                        Rating :{" "}
                        <span className="text-base font-bold text-nutral2">
                          {rating.rate}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex w-full items-center justify-between px-4 pb-4">
                {/* <Button actionType="add to card" />
                                <Button actionType="buy now" /> */}

                <button
                  type="button"
                  onClick={() => getProduct(id)}
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-primary bg-transparent  px-4 py-2 text-sm font-bold capitalize text-nutral2 drop-shadow-lg transition-all duration-200 ease-in-out hover:border-transparent hover:bg-nutral3 hover:text-primary hover:drop-shadow-md"
                >
                  add to cart{" "}
                  <span>
                    <HiShoppingCart className="text-2xl text-primary group-hover:animate-cartAnimate" />
                  </span>
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ProductCategory;
