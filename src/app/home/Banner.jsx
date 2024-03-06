import Link from "next/link";
import React from "react";

const Banner = (props) => {
  if (props.data?.banner) {
    return (
      <div className="flex  mx-auto flex-col-reverse lg:w-[screen-200px]  md:flex-row-reverse ">
        <div className="  h-60 md:h-full">
          <img
            alt="image"
            className=" w-full object-cover h-full rounded-md "
          />
        </div>
        <div className=" min-h-20  md:px-6 md:mr-4 w-full flex flex-col  justify-center  pb-4 mt-4 ">
          <h3 className="uppercase mb-2 text-sm text-primary font-semibold">
            Monetary policy
          </h3>
          <h1 className="text-3xl md:text-4xl font-semibold">Heading</h1>
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
  } else {
    return (
      <>
        <div
          className="text-center w-full flex flex-col justify-evenly pt-4 px-2 items-center bg-gray-400 h-[50vh]
        "
        >
          <h1 className="text-2xl mb-3 md:text-5xl font-semibold ">
            অর্থা-লাপে আপনাকে&nbsp;স্বাগতম
          </h1>
          <p className="w-2/3 text-center font-normal md:text-xl lg:text-2xl">
            অর্থালাপ একটি অলাভজনক সংস্থা যার মুল উদ্দেশ্য অর্থনীতি বিষয়ক সৃজনশীল
            চিন্তা-ধারনা বিস্তার করা ও নবিন লেখকদের উৎসাহি করে তোলা।
          </p>
          <p className="w-2/3 text-center font-normal md:text-xl lg:text-2xl">
            অর্থালাপ সম্পর্কে আরো জানতে আমাদের ওয়েব সাইট{" "}
            <Link href="/about">
              <button className="border rounded-md px-2 pb-1 pt-1 ml-1">
                ঘুরে দেখুন
              </button>
            </Link>
          </p>
        </div>
      </>
    );
  }
};

export default Banner;
