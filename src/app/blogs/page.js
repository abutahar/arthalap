"use client";
import { useEffect, useState } from "react";
import globals from "../globals.css";
import Card from "./Card";

export default function page() {
  const [ress, setRess] = useState([]);

  useEffect(() => {
    try {
      fetch(`${process.env.URL}/posts`)
        .then((res) => res.json())
        .then((d) => {
          setRess(d);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center my-4 text-2xl">
        we have {ress?.length} blogs posted
      </h1>
      <div className=" grid  md:grid-cols-2 gap-3 md:gap-8 lg:grid-cols-3">
        {ress?.map((data, i) => (
          <Card key={i} data={data}></Card>
        ))}
      </div>
    </div>
  );
}
