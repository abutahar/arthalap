"use client";
import React, { useState } from "react";

const addPost = () => {
  const formHandle = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const post = e.target.post.value;
    console.log(title, post);

    if (title && post) {
      try {
        const d = { title, post };
        const fetchData = await fetch("http://arthalap.org:8000/addpost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(d),
        });
        const resposne = await fetchData.json();
        console.log(resposne || "empty");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="p-4">
      <h3 className="text-center text-2xl">add your post here</h3>
      <form
        onSubmit={formHandle}
        className="w-full md:w-1/2 border rounded-md mt-4 mx-auto md:mt-10 px-3"
      >
        <span className="text-gray-600 text-sm mt-1">Title</span>
        <input
          className="mt-2 mb-2  outline-purple-400 rounded px-3 border w-full pt-1 pb-2"
          type="text"
          name="title"
          placeholder="type Title of the article"
          id=""
        />
        <span className="text-gray-600 text-sm mt-1">Post Body</span>
        <textarea
          className="mt-2 mb-2  outline-purple-400 rounded px-3 border w-full pt-1 pb-2"
          type="textaria"
          name="post"
          placeholder="Type your article body"
          rows="3"
          id=""
        />
        <input
          className="mt-2 mb-2  outline-purple-400 rounded px-3 border w-full pt-1 pb-2"
          type="submit"
          id=""
        />
      </form>
    </div>
  );
};

export default addPost;
