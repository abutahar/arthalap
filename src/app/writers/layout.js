import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import globals from "../globals.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 justify-between h-screen">
      <div>
        <Header></Header>
      </div>
      <div className="">{children}</div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
