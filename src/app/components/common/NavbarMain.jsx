"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import SearchButton from "../SearchButton";
import CartContextProvider from "@/app/context/cartContext";
import { usePathname } from "next/navigation";

const NavbarMain = ({ params }) => {
  const currentPath = usePathname();
  const { cart } = useContext(CartContextProvider);
  const [cartItem, setCartItem] = cart;
  const [toggleNav, setToggleNav] = useState(false);
  const [width, setWidth] = useState(window?.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const calcSize = () => {
        setWidth(window.innerWidth);
      };

      setToggleNav(true);
      window.addEventListener("resize", calcSize);
      return () => {
        window.removeEventListener("resize", calcSize);
      };
    }
  }, []);

  // ? Navbar Toggle Functionality...
  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };
  const toggleMobNav = () => {
    setToggleNav(true);
  };

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-lime-100 md:relative md:bg-lime-200">
      <div className="container py-4">
        {width > 768 ? (
          <nav className="flex w-full max-w-7xl items-center justify-between gap-2">
            <div>
              <Link href="/">
                <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-lime-700">
                  <span className="text-pink-500">
                    <RiShoppingBagFill />
                  </span>
                  repliq
                </h2>
              </Link>
            </div>
            <div className="flexRow gap-2">
              <Link
                className={
                  currentPath === "/"
                    ? "navList navLink text-lime-600"
                    : "navLink navList"
                }
                href="/"
              >
                Home
              </Link>
              <Link
                className={
                  currentPath === "/Product"
                    ? "navLink navList text-lime-600"
                    : "navLink navList"
                }
                href="/Product"
              >
                Product
              </Link>
              <Link
                className={
                  currentPath === "/Dashboard"
                    ? "navLink navList text-lime-600"
                    : "navLink navList"
                }
                href="/Dashboard"
              >
                Dashboard
              </Link>
            </div>
            <div className="flexRow gap-4">
              <li>
                <SearchButton />
              </li>
            </div>
            <div className="flexRow gap-4">
              <li className="flex items-center gap-2">
                <span>
                  <VscAccount />
                </span>
                <Link
                  className={
                    currentPath === "/Register"
                      ? "navLink text-lime-600"
                      : "navLink"
                  }
                  href="/Register"
                >
                  {" "}
                  Account
                </Link>
              </li>
              <li className="flex items-center gap-2 ">
                <span className="countCart relative">
                  <BsCartPlus />
                  <span>
                    <p
                      className={
                        currentPath === "/Cart"
                          ? "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-small font-bold text-lime-100"
                          : "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-small font-bold text-lime-100"
                      }
                    >
                      {cartItem.length}
                    </p>
                  </span>
                </span>
                <Link
                  className={
                    currentPath === "/Cart"
                      ? "navLink text-lime-600"
                      : "navLink"
                  }
                  href="/Cart"
                >
                  Cart{" "}
                </Link>
              </li>
            </div>
          </nav>
        ) : (
          <nav className="relative z-20 flex w-full max-w-7xl items-center justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-lime-600">
                <span className="text-lime-600">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </div>
            <div className="cursor-pointer" onClick={handleToggle}>
              {toggleNav ? <FaBars /> : <RxCross1 />}
            </div>
            <div
              className={
                toggleNav
                  ? "mobileNav top fixed left-0 z-50 bg-[#1e1e1c89] px-4 py-20 backdrop-blur-md backdrop-filter sm:px-32"
                  : "mobileNav-active top fixed left-0 z-50 bg-[#1e1e1c89] px-4 py-20 backdrop-blur-md backdrop-filter sm:px-32 "
              }
            >
              <div className="">
                <div>
                  <li>
                    <SearchButton />
                  </li>
                </div>
                <div className="mt-4 gap-2">
                  <Link
                    onClick={toggleMobNav}
                    className={
                      currentPath === "/"
                        ? "navLink navList text-lime-200"
                        : "navLink navList"
                    }
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={toggleMobNav}
                    className={
                      currentPath === "/Product"
                        ? "navLink navList text-lime-200"
                        : "navLink navList"
                    }
                    href="/Product"
                  >
                    Product
                  </Link>
                  <Link
                    onClick={toggleMobNav}
                    className={
                      currentPath === "/Dashboard"
                        ? "navLink navList text-lime-200"
                        : "navLink navList"
                    }
                    href="/Dashboard"
                  >
                    Dashboard
                  </Link>
                  <li className="navList flex items-center justify-start gap-2 py-2">
                    <Link
                      onClick={toggleMobNav}
                      className={
                        currentPath === "/Register"
                          ? "navLink text-lime-200"
                          : "navLink"
                      }
                      href="/Register"
                    >
                      {" "}
                      <span>
                        <VscAccount />{" "}
                      </span>{" "}
                      Account
                    </Link>
                  </li>
                  {" "}
                  <li className="navList flex items-center justify-start gap-2 py-2">
                    <Link
                      onClick={toggleMobNav}
                      className={
                        currentPath === "/Cart"
                          ? "navLink relative text-lime-200"
                          : "navLink relative"
                      }
                      href="/Cart"
                    >
                      {" "}
                      <span className="relative">
                        <BsCartPlus />
                        <span>
                          <p
                            className={
                              currentPath === "/Cart"
                                ? "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-small font-bold text-lime-100"
                                : "absolute -top-2 left-1 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-small font-bold text-lime-100"
                            }
                          >
                            {cartItem.length}
                          </p>
                        </span>
                      </span>{" "}
                      Cart{" "}
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default NavbarMain;
