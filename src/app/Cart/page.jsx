"use client";
import React, { useEffect, useContext, useRef, useState } from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import CartContextProvider from "../context/cartContext";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Counter from "../components/Counter";

const Cart = () => {
  const { cart } = useContext(CartContextProvider);
  const [cartValue, setCartValue] = cart;
  const [uniqueCart, setUniqueCart] = useState([]);
  const counterRef = useRef(null);

  const deleteItem = () => {
    try {
      setCartValue([]);
      setUniqueCart([]);

      toast.success("All products are deleted");
    } catch (error) {
      toast.error("Can't perform the operation.");
    }
  };
  // ?? delete Individual Cart Item..
  const deleteCartItem = (id) => {
    try {
      setUniqueCart((currItem) => currItem.filter((item) => item.id !== id));
      setCartValue((currItem) => currItem.filter((item) => item.id !== id));
      toast.success("Product Removed");
    } catch (error) {
      toast.error("Product not found");
    }
  };
  const fetchUniqueCart = () => {
    const uniqueItem = new Set(cartValue.map(JSON.stringify));
    const uniqueProduct = Array.from(uniqueItem).map(JSON.parse);
    setUniqueCart((prevItem) => [...prevItem, ...uniqueProduct]);
  };
  useEffect(() => {
    fetchUniqueCart();
  }, []);

  const total = uniqueCart
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div className="cartHeight py-16">
      <div className="container p-2 sm:p-4 md:p-0 ">
        <div className="mb-8 flex items-center justify-between gap-4 sm:gap-20">
          <h2 className="cartTitle ms:text-4xl text-left font-mono text-2xl font-extrabold capitalize text-accent">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={deleteItem}
            className="flex cursor-pointer items-center justify-between gap-2 rounded-md text-nutral3 bg-primary px-4 py-2 capitalize"
          >
            Delete All{" "}
            <span className="flex items-center justify-center bg-[#fafafa] backdrop-blur-sm p-1 rounded-full">
            <HiArchiveBoxXMark className="hover:animate-shake text-xl text-denger" />

            </span>
          </button>
        </div>
        <div className="grid grid-cols-productLayout gap-24 sm:place-items-stretch md:grid-cols-homepageLayoutHero">
          <div>
            {uniqueCart.map((item) => {
              const { id, title, price, image, category, quantity } = item;

              return (
                <div
                  key={id}
                  className="group relative mb-2 flex items-center justify-between gap-8 rounded-md border-b border-nutral1 bg-nutral3 p-3 drop-shadow-md shadow-nutral2"
                >
                  <div className="absolute right-0 top-3 flex h-8 w-8 -translate-x-1/2  items-center justify-center rounded-full p-1">
                    <button
                      onClick={() => deleteCartItem(id)}
                      className="cursor-pointer mb-2"
                    >
                        <HiArchiveBoxXMark className="text-xl text-denger" />
                    </button>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="h-20 w-20 overflow-hidden rounded-md">
                      <Image
                        className="aspect-square h-20 object-cover object-center"
                        src={image}
                        alt="image"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div>
                      <h2 className="text-left text-xs font-bold capitalize text-nutral2 md:text-base">
                        {title}
                      </h2>
                      <h2 className="py-1 text-left text-xs font-bold capitalize text-nutral2 md:text-xl">
                        {category}
                      </h2>
                      <h2 className="text-left text-xl font-bold capitalize text-primary md:text-base">
                        ${price}
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div className="grid place-items-center">
                      {/* <Counter setUniqueCart={setUniqueCart} uniqueCart={uniqueCart} productId={id} quantity={quantity} /> */}
                      Quan
                      <div className="text-xl font-bold text-primary">
                        {quantity}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex max-h-max flex-col items-start">
            <div className="mb-2 w-full border-b border-gray-500 pb-4">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-left text-base font-medium capitalize">
                  subtotal
                </h2>
                <h2 className="text-left text-base font-medium capitalize">
                  ${total}
                </h2>
              </div>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-left text-base font-medium capitalize">
                  shipping
                </h2>
                <h2 className="text-left text-base font-medium capitalize">
                  $3.45
                </h2>
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <h2 className="text-left text-base font-medium capitalize">
                total
              </h2>
              <h2 className="text-left text-primary font-bold text-base capitalize">
                {cartValue.length > 0
                  ? `$ ${(+total + 3.45).toFixed(2)}`
                  : `$ ${0.0}`}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
