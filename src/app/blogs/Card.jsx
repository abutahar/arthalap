import React from "react";
import moment from "moment";

const Card = (props) => {
  const data = props?.data;
  const dateString = data?.postTime || "";
  const formattedDate = moment(dateString).format("H:mmA MM/DD/YY");
  return (
    <div
      key={data?._id}
      className="border  md:basis-1/2 lg:basis-1/3 rounded-md p-2 md:p-4 "
    >
      <h1 className=" text-base md:text-lg uppercase border-b mb-0  pb-2 ">
        {data?.title || ""}
      </h1>
      <div className="flex justify-between border-b pb-1 px-2 text-sm md:text-base lowercase">
        <address>{data?.author || "Anonymous"}</address>
        <p>{formattedDate || "Date not found"}</p>
      </div>
      <div className="mb-1 mt-2 ">
        <p className="text-sm md:text-lg pl-2 bg-gray-100 py-2 mb-2">
          {data?.post + " " || ""}
        </p>
        <span className="bg-green-300 text-sm md:text-base rounded px-2 pb-1">
          read more
        </span>
      </div>
    </div>
  );
};

export default Card;
