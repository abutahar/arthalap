"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      {/* for mobile */}
      <select
        name="menu"
        className="border md:text-2xl md:hidden  border-gray-100 rounded-sm"
      >
        <option value="home">
          <a href="/">Home</a>
        </option>
        <option value="blogs">
          <a href="">Blogs</a>
        </option>
        <option value="writers">Writers</option>
        <option value="about">About Us</option>
      </select>
      {/* for pc */}
      <div className="list-none hidden  text-xl uppercase md:flex items-center justify-center mr-auto gap-2">
        <Link
          href="/"
          className={`${pathname == "/" ? " border-2 border-blue-400 bg-gray-200 rounded" : " hover:border-b-[3px]"}  px-2 `}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${pathname == "/about" ? " border-2 border-blue-400 bg-gray-200 rounded" : " hover:border-b-[3px]"}  px-2 `}
        >
          About
        </Link>
        <Link
          href="/writers"
          className={`${pathname == "/writers" ? " border-2 border-blue-400 bg-gray-200 rounded" : " hover:border-b-[3px]"}  px-2 `}
        >
          Writers
        </Link>
        <Link
          href="/blogs"
          className={`${pathname == "/blogs" ? " border-2 border-blue-400 bg-gray-200 rounded" : " hover:border-b-[3px]"}  px-2 `}
        >
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
