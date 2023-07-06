"use client"
import React, { useEffect, useState, useRef, useContext } from 'react'
import Link from 'next/link';
// import { ProductContext } from '../context/productContext';
import SearchButton from '../SearchButton';
import {FaShoppingCart,FaBars} from "react-icons/fa";
import {VscAccount} from "react-icons/vsc"
import {BsCartPlus} from "react-icons/bs"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import {RiShoppingBagFill} from "react-icons/ri"
import {HiOutlineBars3CenterLeft} from "react-icons/hi"
import {RxCross1} from "react-icons/rx"

const Navbar = () => {
    // const {cart,product} = useContext(ProductContext);
    // const [cartValue,setCartValue] = cart;
    const navBar = useRef(null);
    const [toggleNav, setToggleNav] = useState(false);
    /* const [width , setWidth] = useState(window?.innerWidth | 768); */
    const [width, setWidth] = useState(767);
    const [navheight, setNavHeight] = useState(0);

    useEffect(() => {
        const height = navBar.current.getBoundingClientRect().height;
        setNavHeight(height);
      }, []);
 
   /*  useEffect(() => {
    const calcSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", calcSize);
    return () => {
      window.removeEventListener("resize", calcSize);
    };
  }, []); */
  useEffect(() =>{
    setToggleNav(true);
  },[])

  console.log(toggleNav);
    // ? Navbar Toggle Functionality...
    const handleToggle = () => {
        setToggleNav(!toggleNav);
    }
  
  return (
    <div ref={navBar} className='bg-gray-200 px-8 flex items-center justify-center py-3'>
        
         <h2>hello</h2>
    </div>
  )
}

export default Navbar

