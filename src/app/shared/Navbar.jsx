import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center list-none">
      <select name="menu" className="border border-gray-100 rounded-sm">
        <option value="home" defaultChecked>
          Home
        </option>
        <option value="allpost">Posts</option>
        <option value="about">About Us</option>
        <option value="policy">Policy</option>
      </select>
    </div>
  );
};

export default Navbar;
