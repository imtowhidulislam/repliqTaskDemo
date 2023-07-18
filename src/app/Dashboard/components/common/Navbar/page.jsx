"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// ?? Creating Dashboard Route Array.
const dashBoard = [
  {
    id: 1,
    route: "/Dashboard",
    routeName: "dashboard",
  },
  {
    id: 2,
    route: "/Dashboard/addProduct",
    routeName: "Add Product",
  },
  {
    id: 3,
    route: "/Dashboard/user",
    routeName: "User",
  },
  {
    id: 4,
    route: "/Dashboard/newproduct",
    routeName: "New Product",
  },
];
const DashboardNavbar = () => {
  const currRoute = usePathname().split("/").slice(-1)[0].toLowerCase();
  console.log(currRoute);
  return (
    <div>
      <div className="mt-16 grid w-full place-items-start gap-3 md:mt-0">
        {dashBoard.map((routes) => {
          const { id, route, routeName } = routes;
          // console.log(routeName.toLowerCase().split(" ").join(""));
          return (
            <Link
              key={id}
              href={route}
              className={
                currRoute === routeName.toLowerCase().split(" ").join("")
                  ? "w-full cursor-pointer rounded-md border-2 border-nutral3 bg-nutral3 px-8 py-2 text-center font-bold capitalize text-nutral2 shadow-nutral2 drop-shadow-md hover:border-transparent hover:bg-nutral3 hover:text-primary"
                  : "w-full cursor-pointer rounded-md border-2 border-nutral3 bg-transparent px-8 py-2 text-center font-bold capitalize text-nutral2 shadow-nutral2 drop-shadow-md hover:border-transparent hover:bg-nutral3 hover:text-primary"
              }
            >
              {routeName === "dashboard" ? "products" : routeName}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardNavbar;
