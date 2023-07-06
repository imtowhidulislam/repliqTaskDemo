"use client";
import { useContext, useEffect, useRef, useState } from "react";
import ProductCategory from "./components/productCategory";
import ProductOfList from "./components/ProductOfList";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineArrowUpCircle, HiArrowUpCircle } from "react-icons/hi2";
// import { useProductData } from "../Data/productData";
import CartContextProvider from "../context/cartContext";
import Loading from "./loading";
import { buttonData } from "../Data/buttonData";

const Page = () => {
  const sectionRef = useRef(null);
  //   const { data, isLoading, error } = useProductData();
  const { cart } = useContext(CartContextProvider);
  const [cartValue, setCartValue] = cart;
  const [backToTop, setBackToTop] = useState(false);
  //   const [productValue, setProductValue] = useState(data);
  const [productValue, setProductValue] = useState([]);
  const [button, setButton] = useState([]);
  const [filterProduct, setFilterProduct] = useState("All");

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw Error("Url might be not found.");

    let unique = [...new Set(data?.map((item) => item.category))];
    setButton(unique);

    setProductValue([...data]);
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["productData"],
    queryFn: fetchData,
  });

  // !!! Back To Top
  const handleTop = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // !! Fetching the Unique Category Product >>>

  const handleClick = (e) => {
    setFilterProduct(e.target.dataset.name);
  };

  return (
    <div className="container px-3 py-8 sm:py-24 md:px-0 ">
      <div ref={sectionRef} className="md-4 mt-16 sm:mt-0 md:mb-12">
        <h2 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-left text-2xl font-extrabold uppercase text-transparent md:text-center md:text-4xl lg:text-6xl">
          Get your desired One.
        </h2>
      </div>
      <div id="buttonSection" className="btn_container mt-4 md:mt-0">
        {button && (
          <button
            className="btn w-full sm:w-max"
            onClick={handleClick}
            data-name="All"
          >
            All
          </button>
        )}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {button.length !== 0
            ? button.map((btns, i) => {
                return (
                  <>
                    <button
                      key={i}
                      className="btn w-full sm:w-max"
                      onClick={handleClick}
                      data-name={btns}
                    >
                      {btns}
                    </button>
                  </>
                );
              })
            : buttonData.map((btns, i) => {
                return (
                  <>
                    <button
                      key={i}
                      className="btn w-full sm:w-max"
                      onClick={handleClick}
                      data-name={btns}
                    >
                      {btns}
                    </button>
                  </>
                );
              })}
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          // ref={sectionRef}
          className="z-10 mt-10 grid min-h-custom-min-h grid-cols-productLayout place-items-start gap-4 overflow-hidden"
        >
          {filterProduct === "All" ? (
            <ProductOfList
              filterProduct={filterProduct}
              product={data}
              // setProduct={setProductValue}
              loading={isLoading}
              cart={cartValue}
              setCart={setCartValue}
            />
          ) : (
            <ProductCategory
              filterProduct={filterProduct}
              product={data}
              // setProduct={setProductValue}
              loading={isLoading}
              cart={cartValue}
              setCart={setCartValue}
            />
          )}
        </div>
      )}

      {/* Move to Top Button. */}
      <div className="fixed bottom-5 left-3/4 z-50">
        <button
          className="rounded-full border-2 border-lime-200 p-1"
          onClick={handleTop}
        >
          {backToTop ? (
            <HiOutlineArrowUpCircle className="topBtn" />
          ) : (
            <HiArrowUpCircle className="topBtn" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Page;
