import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {
  return (
    <div>
      <div className="grid w-full place-items-start gap-3 mt-16 md:mt-0">
        <Link
          href="/Dashboard"
          className="w-full cursor-pointer rounded-md border-2 border-nutral3 drop-shadow-md shadow-nutral2 bg-transparent px-8 py-2 text-center font-bold capitalize text-nutral2 hover:border-transparent hover:bg-nutral3 hover:text-primary"
        >
          products
        </Link>
        <Link
          href="/Dashboard/addProduct"
          className="w-full cursor-pointer rounded-md border-2 border-nutral3 drop-shadow-md shadow-nutral2 bg-transparent px-8 py-2 text-center font-bold capitalize text-nutral2 hover:border-transparent hover:bg-nutral3 hover:text-primary"
        >
          add products
        </Link>
        <Link
          href="/Dashboard/user"
          className="w-full cursor-pointer rounded-md border-2 border-nutral3 drop-shadow-md shadow-nutral2 bg-transparent px-8 py-2 text-center font-bold capitalize text-nutral2 hover:border-transparent hover:bg-nutral3 hover:text-primary"
        >
          users
        </Link>
        <Link
          href="/Dashboard/newproduct"
          className="w-full cursor-pointer rounded-md border-2 border-nutral3 drop-shadow-md shadow-nutral2 bg-transparent px-8 py-2 text-center font-bold capitalize text-nutral2 hover:border-transparent hover:bg-nutral3 hover:text-primary"
        >
          new product
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavbar;
