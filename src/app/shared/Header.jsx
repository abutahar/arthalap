import React from "react";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="h-auto border-b border-gray-200 py-5 px-2">
      <div className="bg flex px-2 items-center justify-end  h-full">
        <h3 className="mr-auto  text-3xl  m-0 p-0 font-sans uppercase font-semibold">
          Arthalap
        </h3>
        <Navbar></Navbar>

        <span className=" focus:pl-2 mx-2 text-end transition-all w-7 hover:w-[25vw]  focus:w-[25vw] duration-500  flex">
          <input
            type="text"
            className=" pl-1 transition-all  border duration-500  rounded outline-none w-full  focus:w-full focus:placeholder-transparent"
            placeholder="🔍"
          />
        </span>

        <span className="text-lg">
          <FaBars />
        </span>
      </div>
    </div>
  );
};

export default Header;
