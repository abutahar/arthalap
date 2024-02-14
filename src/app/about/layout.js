import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div>
        <Header></Header>
      </div>
      <div>{children}</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default layout;
