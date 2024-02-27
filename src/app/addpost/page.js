"use client";
import React, { useState } from "react";

const addPost = () => {
  const [response, setResponse] = useState({});
  const formHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = e.target.title.value;
    const post = e.target.post.value;
    console.log(title, post);

    if (title && post) {
      try {
        const d = { title, post };
        fetch(`${process.env.URL}/addpost`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(d),
        })
          .then((fetchData) => fetchData.json())
          .then((res) => {
            console.log(res || "empty");
            setResponse(res);
            form.reset();
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="p-4">
      <h3 className="text-center text-xl md:text-2xl uppercase ">
        add your post here
      </h3>
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
