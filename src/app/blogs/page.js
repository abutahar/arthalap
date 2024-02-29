"use client";
import { useEffect, useState } from "react";
import globals from "../globals.css";
export default function page() {
  const [ress, setRess] = useState([]);
  useEffect(() => {
    fetch(`${process.env.URL}/posts`)
      .then((res) => res.json())
      .then((d) => {
        setRess(d);
      });
    console.log("the url is", process.env.URL);
  }, []);
  return (
    <div>
      <h1 className="text-center my-4 text-2xl">
        we have {ress.length} blogs posted
      </h1>
      <div className=" grid  md:grid-cols-2 gap-3 md:gap-8 lg:grid-cols-3">
        {ress.map((data, index) => (
          <div
            key={data._id}
            className="border  md:basis-1/2 lg:basis-1/3 rounded-md p-2 md:p-4"
          >
            <h1 className="font-semibold text-2xl uppercase border-b mb-3 pb-4">
              {index + 1 + ". " + data.title || ""}
            </h1>
            <p>Date:{data.postTime || "not added"}</p>
            <p>{data.post || ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
