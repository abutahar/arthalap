"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import globals from "../globals.css";
export default function page() {
  const [ress, setRess] = useState([]);
  const { year, month, day, hours, minutes } = ress?.postTime || {};

  useEffect(() => {
    try {
      fetch(`${process.env.URL}/posts`)
        .then((res) => res.json())
        .then((d) => {
          setRess(d);
          console.log(d.postTime);
        });
      console.log("the url is", process.env.URL);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const date = new Date();
  console.log(date);
  return (
    <div>
      <h1 className="text-center my-4 text-2xl">
        we have {ress?.length} blogs posted
      </h1>
      <div className=" grid  md:grid-cols-2 gap-3 md:gap-8 lg:grid-cols-3">
        {ress.map((data) => (
          <div
            key={data._id}
            className="border  md:basis-1/2 lg:basis-1/3 rounded-md p-2 md:p-4"
          >
            <h1 className="font-semibold text-2xl uppercase border-b mb-3 pb-4">
              {data.title || ""}
            </h1>
            <p>
              Date:
              {year || "Date not added"}
            </p>
            <p>{data.post || ""}</p>
          </div>
        )) || ""}
      </div>
    </div>
  );
}
