"use client";
import React, { useEffect, useState } from "react";
const page = () => {
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.URL}/posts`);
        const result = await response.json();

        setWriters(result);
      } catch (error) {
        console.log("sorry for the error");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-auto w-screen lg:w-10/12 px-4">
      <h1 className="text-xl uppercase md:text-3xl text-center">
        We have {writers?.length || "..."} writers
      </h1>
    </div>
  );
};

export default page;
