import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* for mobile */}
      <select
        name="menu"
        className="border md:text-2xl md:hidden  border-gray-100 rounded-sm"
      >
        <option value="home" defaultChecked>
          Home
        </option>
        <option value="allpost">Blogs</option>
        <option value="about">About Us</option>
        <option value="policy">Contributors</option>
      </select>
      {/* for pc */}
      <div className="list-none hidden  text-xl uppercase md:flex items-center justify-center mr-auto gap-7">
        <li className="hover:border-y-2 px-2 border-gray-200">Home</li>
        <li className="hover:border-y-2 px-2 border-gray-200">About</li>
        <li className="hover:border-y-2 px-2 border-gray-200">Contributors</li>
        <li className="hover:border-y-2 px-2 border-gray-200">Blogs</li>
      </div>
    </div>
  );
};

export default Navbar;
