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
  loading,
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

      const checkProductInThere = product.find(item => {
        item.quantity = 1;
        return item.id === id;
      })
      setCart((prevItem) => [...prevItem, checkProductInThere]);
      
      cart.find(item => item.id === id && (item.quantity += 1))

      toast.success("Product Added");
    } catch (error) {
      toast.error("Product not found");
    }
  };

  return (
    <>
      {loading ? (
        <h2 className="text-lime-800 text-3xl font-bold">Fetching Data...</h2>
      ) : (
        filterProductData.map((singleProduct) => {
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
              className="card relative z-10 flex h-full animate-moveUp flex-col items-center justify-between gap-2"
            >
              <div className="absolute left-3/4 top-3">
                <FavoriteBtn />
              </div>
              <Link href={`/Product/${id}`} className="">
                <div>
                  <div className="m-auto mb-4 max-h-44 w-48 p-4">
                    <Image
                      className="block h-44 w-full object-cover"
                      src={img}
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="z-20 px-4 pb-4 pt-2 text-left text-gray-700">
                    <div>
                      <h2 className="sm:text-lg">
                        Name :{" "}
                        {title.split(" ").length <= 5
                          ? `${titleLength}`
                          : `${titleLength}...`}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between gap-4 py-2">
                      <h2>
                        Price :{" "}
                        <span className="font-bold text-lime-400">
                          {price}$
                        </span>
                      </h2>
                      <p>
                        Rating :{" "}
                        <span className="font-bold text-lime-400">
                          {rating.rate}
                        </span>
                      </p>
                    </div>
                    <h2>Category : {cat}</h2>
                    {/* <p>Detail : {desc}$</p> */}
                  </div>
                </div>
              </Link>
              <div className="flex w-full items-center justify-between px-4 pb-4">
                {/* <Button actionType="add to card" />
                                <Button actionType="buy now" /> */}
                <button
                  type="button"
                  onClick={() => getProduct(id)}
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-lime-900  bg-transparent px-4 py-2 text-sm font-bold capitalize text-lime-900 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-lime-700 hover:text-lime-100 hover:drop-shadow-md"
                >
                  add to cart{" "}
                  <span>
                    <HiShoppingCart className="text-2xl text-lime-100 group-hover:animate-cartAnimate" />
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
