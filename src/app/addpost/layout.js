import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import globals from "../globals.css";
const layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header></Header>
      </div>
      <div>{children}</div>;
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default layout;
