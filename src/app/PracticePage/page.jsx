"use client";
import { useEffect, useState } from "react";
import { useProductData } from "../Data/productData";
import Link from "next/link";
import Image from "next/image";
import { ButtonFilled, ButtonOutlined } from "../Util/ButtonOutlined";
import Skeleton from "react-loading-skeleton";
import Emon from "../../../public/emon.jpg";

const page = () => {
  const { data, isLoading, error } = useProductData();

  const arr = ["towhid", "niama", "akash"];

  arr.with(1, "Monifa");
  console.log(arr);

  return (
    <>
    <div><Image src={Emon} alt="emon" width={400} height={400} /></div>
      <div className="bg-red-300 group p-8 flex items-center justify-between">
        <h2 className="w-20 h-20 bg-slate-200 group-hover:bg-slate-400">one</h2>
        <h2 className="w-20 h-20 bg-slate-200 group-hover:bg-slate-400">two</h2>
        <h2 className="w-20 h-20 bg-slate-200 group-hover:bg-slate-400">three</h2>
        <h2 className="w-20 h-20 bg-slate-200 group-hover:bg-slate-400">four</h2>
        <h2 className="w-20 h-20 bg-slate-200 group-hover:bg-slate-400">five</h2>
      </div>
    </>
  );
};

export default page;
