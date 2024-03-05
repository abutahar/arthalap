import React from "react";
import moment from "moment";

const Card = (props) => {
  const data = props?.data;
  const dateString = data?.postTime || "";
  console.log(dateString);
  const formattedDate = moment(dateString).format("MMMM D, YYYY, h:mm:ss A");
  return (
    <div
      key={data?._id}
      className="border  md:basis-1/2 lg:basis-1/3 rounded-md p-2 md:p-4"
    >
      <h1 className="font-semibold text-2xl uppercase border-b mb-3 pb-4">
        {data?.title || ""}
      </h1>
      <p>{formattedDate || "Date not found"}</p>
      <p>{data?.post || ""}</p>
    </div>
  );
};

export default Card;
