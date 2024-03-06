"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaBars, FaPenFancy } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiLogIn, BiUser } from "react-icons/bi";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const user = "";

  return (
    <div className="h-auto  border-b md:border-b-2 md:py-2  md:px-4 border-gray-200 px-2">
      <div className="flex px-2 md:px-10 md:gap-5 items-center justify-around md:hover:justify-start   h-full">
        <div className="mr-auto md:flex md:flex-grow-0 flex-shrink-0 inline  w-16 md:w-40  md:h-16 md:text-4xl ">
          <a href="/">
            <img
              src="/arthalalap_logo.png"
              className="md:hidden"
              alt="Arthalap"
            />
            <img
              src="/arthalalap_pc_logo.png"
              className="hidden md:block"
              alt="Arthalap"
            />
          </a>
        </div>
        <div className=" md:flex-1 mx-auto ">
          <Navbar></Navbar>
        </div>
        <span className="md:text-xl  md:p-2 rounded md:border-r border p-1  border-gray-200">
          <a href="/addpost">
            <FaPenFancy />
          </a>
        </span>
        <span className=" focus:pl-2 relative mx-2 text-end border flex px-1 items-center justify-start transition-all w-7 md:w-[42px]  rounded focus:w-[35vw] hover:w-[35vw]  duration-500 ">
          <span className="md:text-xl md:p-2 rounded md:border-r border-gray-200">
            <FaMagnifyingGlass />
          </span>
          <input
            type="text"
            className=" pl-1 md:text-2xl md:pl-3 transition-all  z-0 duration-500   outline-none w-full  focus:w-full  "
            placeholder="FIND ARTICLE"
          />
        </span>

        <span
          className="text-lg md:text-3xl "
          onClick={() => setOpenSidebar(() => !openSidebar)}
        >
          <div className="md:hidden transition-all overflow-ellipsis">
            <div>
              <FaBars />
            </div>
            <div
              className={`list-none  fixed ease-out right-0  border h-screen  bg-white px-4 pt-4 my-2   flex flex-col gap-2 duration-500  ${!openSidebar ? "translate-x-0" : "translate-x-full"} -top-[8px] border-l-gray-400 transition-transform  w-[60vw]`}
            >
              <div
                className=" px-3 flex mb-4 pb-1 rounded-full  border w-fit  "
                onClick={() => setOpenSidebar(() => !openSidebar)}
              >
                x
              </div>
              <div className="border rounded-md flex justify-between w-full items-center px-2 pt-2 pb-3 hover:bg-gray-200 border-green-300">
                <a href="/addpost">Add a Post</a>
                <span className="md:text-xl rounded  border p-1 mr-1 mt-1 border-gray-200">
                  <a href="/addpost">
                    <FaPenFancy />
                  </a>
                </span>
              </div>
              <div className="border rounded-md w-full px-2 pt-2 pb-3 hover:bg-gray-200">
                <a href="/">Home</a>
              </div>
              <div className="border rounded-md w-full px-2 pt-2 pb-3 hover:bg-gray-200">
                <a href="/about">About</a>
              </div>
              <div className="border rounded-md w-full px-2 pt-2 pb-3 hover:bg-gray-200">
                <a href="/blogs">Blogs</a>
              </div>
              <div className="border rounded-md w-full px-2 pt-2 pb-3 hover:bg-gray-200">
                <a href="/writers">Writers</a>
              </div>
              <div className="text-gray-400 text-sm mt-auto border-t text-center rounded-md w-full px-2 pt-2 pb-3 ">
                <a href="">sponsord by Abutahar</a>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            {!user ? <BiLogIn /> : <BiUser /> || " PP"}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;
