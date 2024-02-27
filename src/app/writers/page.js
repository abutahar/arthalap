"use client";
import React, { useEffect, useState } from "react";
const page = () => {
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://arthalap-backend.vercel.app/posts",
        );
        const result = await response.json();

        setWriters(result);
      } catch (error) {
        console.log("sorry for the error");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>We have {writers?.length || "currently no"} writers</h1>
    </div>
  );
};

export default page;
