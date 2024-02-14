import React from "react";

const GlobalEconomy = () => {
  return (
    <div className="flex flex-col content-between ">
      <div className=" h-60">
        <img
          src="image_blog.jpg"
          alt="image"
          className=" w-full  object-cover h-full  "
        />
      </div>
      <div className=" min-h-20 flex-1 w-full flex flex-col    pb-4 border-b-2 mb-10">
        <h3 className="uppercase text-sm text-blue-900 font-semibold">
          Monetary policy
        </h3>
        <h1 className="text-3xl font-semibold">
          Emerging markets nagivate gloval interest rate
        </h1>
        <div className="flex mt-auto justify-start gap-2 md:gap-4 pb-2 md:pb-4 border-b  items-center">
          <div id="date" className="uppercase">
            january 31 2020
          </div>
          <div id="review">
            <span>🤍 </span>
            Reviewed
          </div>
        </div>
        <div className="font-normal mt-auto">
          <h4 className="uppercase my-2 bottom-0 text-blue-900 font-semibold text-sm">
            Tobias adrain, Fabio natalucci .jason we
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            nesciunt cum earum alias aut nihil?
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalEconomy;
