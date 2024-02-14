import React from "react";

const Banner = () => {
  return (
    <div className="flex md:w-[70%] mx-auto flex-col-reverse md:h-[50vh]  md:flex-row-reverse">
      <div className=" md:basis-2/3 h-60 md:h-full">
        <img
          src="image_blog.jpg"
          alt="image"
          className=" w-full object-cover h-full rounded-md "
        />
      </div>
      <div className=" min-h-20 basis-1/3 md:px-6 md:mr-4 w-full flex flex-col  justify-center  pb-4 mt-4 ">
        <h3 className="uppercase mb-2 text-sm text-primary font-semibold">
          Monetary policy
        </h3>
        <h1 className="text-3xl md:text-4xl font-semibold">
          Emerging markets nagivate gloval interest rate
        </h1>
        <div className="flex  justify-start gap-2  py-2  items-center">
          <div id="date" className="uppercase">
            january 31 2020
          </div>
          <div id="review">
            <span>🤍 </span>
            Reviewed
          </div>
        </div>
        <div className="font-normal ">
          <h4 className="uppercase  bottom-0 text-primary py-2 font-semibold text-sm">
            Tobias adrain, Fabio natalucci .jason we
          </h4>
          <p className="leading-7 font-normal text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            nesciunt cum earum alias aut nihil?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
