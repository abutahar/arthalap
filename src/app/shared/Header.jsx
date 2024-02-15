import React from "react";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";

const Header = () => {
  const user = "";
  return (
    <div className="h-auto  border-b md:border-b-2 md:py-2  md:px-4 border-gray-200 px-2">
      <div className="flex px-2 md:px-10 md:gap-5 items-center justify-around md:hover:justify-start   h-full">
        <div className="mr-auto md:flex md:flex-grow-0 flex-shrink-0 inline  w-16 md:w-40  md:h-16 md:text-4xl ">
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
        </div>
        <div className=" md:flex-1 ">
          <Navbar></Navbar>
        </div>

        <span className=" focus:pl-2 relative mx-2 text-end border flex px-1 items-center justify-start transition-all w-7 md:w-[42px]  rounded focus:w-[35vw] hover:w-[35vw] duration-500 ">
          <span className="md:text-xl md:p-2 rounded md:border-r border-gray-200">
            <FaMagnifyingGlass />
          </span>
          <input
            type="text"
            className=" pl-1 md:text-2xl md:pl-3 transition-all  z-0 duration-500   outline-none w-full  focus:w-full  "
            placeholder="FIND ARTICLE"
          />
        </span>

        <span className="text-lg md:text-3xl">
          <div className="md:hidden">
            <FaBars />
          </div>
          <div className="hidden md:block">
            <BiLogIn />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;
