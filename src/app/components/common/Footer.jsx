"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaCopyright } from "react-icons/fa";
import Link from "next/link";
// import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaCopyright } from 'react-icons/fa';

const Footer = () => {
  const [footerForm, setFooterForm] = useState({ email: "" });
  const [newsletterUser, setNewsletterUser] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFooterForm({ ...footerForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (footerForm.email) {
      const id = new Date().getTime().toString();
      const newUser = { ...footerForm, id };
      const updatedData = [...newsletterUser, newUser];
      setNewsletterUser(updatedData);

      setFooterForm({ email: "" });
    }
  };

  // !! Storing Newsletter Data into the localStorage.
  useEffect(() => {
    localStorage.setItem("newsletteruser", JSON.stringify(newsletterUser));
  }, [newsletterUser]);

  return (
    <div className="bg-lime-200 px-4 py-8 mt-1">
      <div className="container">
        <div className="mb-10 flex items-center justify-start text-6xl text-gray-100">
          <div>
            <Link href="/" className="cursor-pointer">
              <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-lime-800">
                <span className="text-4xl text-lime-800">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-footerLayout gap-12">
          <div className="footerStyle">
            <h2>Privacy Policy</h2>
            <p>Terms & Condition</p>
            <p>contacts</p>
            <p>support</p>
            <p>feedback</p>
          </div>
          <div className="footerStyle">
            <h2>Navigate</h2>
            <div className="flex items-center gap-2">
              <Link
                className="transition-all duration-200 ease-in-out hover:text-gray-200"
                href="/"
              >
                Home
              </Link>
              <Link
                className="transition-all duration-200 ease-in-out hover:text-gray-200"
                href="/Product"
              >
                Product
              </Link>
              <Link
                className="transition-all duration-200 ease-in-out hover:text-gray-200"
                href="/Dashboard"
              >
                Dashboard
              </Link>
            </div>
            <p>
              <span>email : </span>repliq@gmail.com
            </p>
          </div>
          <div className="footerStyle">
            <h2>Follow Us</h2>

            <div className="mt-2 flex gap-2 text-2xl text-lime-800">
              <FaFacebookSquare className="footerSocialIcon" />
              <FaTwitterSquare className="footerSocialIcon
              " />
              <FaInstagramSquare className="footerSocialIcon" />
              <FaLinkedin className="footerSocialIcon" />
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-start gap-1 capitalize text-[#363535cc]">
          <FaCopyright className="text-small sm:text-base" />
          <p className="text-small font-light sm:text-base">
            copyright <span>2023. </span>all rights reserve to Repliq
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
