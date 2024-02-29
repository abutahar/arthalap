"use client";
import React, { useState } from "react";
import moment from "moment";

const addPost = () => {
  // state declaration
  const [response, setResponse] = useState({});
  const [err, setErr] = useState("");
  const user = { name: "taher" };

  // form handler function
  const formHandle = (e) => {
    e.preventDefault();

    // declarations
    const time = moment();
    const postTime = time.add(6, "hours");
    const form = e.target;
    const title = e.target.title.value;
    const post = e.target.post.value;

    // first check of input
    if (title.length > 20 && post.length > 200) {
      try {
        const d = { title, post, user, postTime };
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
        setErr("something wrong!!");
      }
    } else if (!title && !post) {
      setErr("please fill up the form");
      setTimeout(() => {
        setErr("");
      }, 2000);
    } else if (title.length < 20) {
      setErr("title should be more than 20 char");
      setTimeout(() => {
        setErr("");
      }, 2000);
      form.title.focus();
    } else {
      form.post.focus();
      setErr("post should be more than 200 char");
      setTimeout(() => {
        setErr("");
      }, 2000);
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-center text-xl md:text-2xl uppercase ">
        add your post here
      </h3>
      <form
        onSubmit={formHandle}
        className="w-full md:w-1/2  rounded-md mt-4 mx-auto md:mt-10 px-3"
      >
        <fieldset className="border border-black rounded px-4 pb-2">
          <legend className="px-1 uppercase text-sm">
            Give the needed data{" "}
          </legend>
          <label htmlFor="title" className="text-gray-600 text-sm mt-1">
            Title
          </label>
          <input
            className="mt-2 mb-2  outline-purple-400 rounded px-3 border w-full pt-1 pb-2"
            type="text"
            name="title"
            placeholder="Type title of the article"
            id=""
          />
          <label htmlFor="post" className="text-gray-600 text-sm mt-1">
            Post Body
          </label>
          <textarea
            className="mt-2 mb-2  outline-purple-400 rounded px-3 border w-full pt-1 pb-2"
            type="textaria"
            name="post"
            placeholder="Type your article body"
            rows="3"
            id=""
          />
          {/* <div className=" flex justify-start gap-2">
            <label for="featured">Featured:</label>
            <input type="checkbox" name="featured" id="" />
            <br />
          </div>
          <div className=" flex justify-start gap-2">
            <label for="anonymous">Post Anonymous:</label>
            <input type="checkbox" name="anonymous" id="" />
          </div> */}
          <div className="text-sm text-red-700">
            <p>{err || ""}</p>
          </div>
          <input
            className="mt-2 mb-2  outline-purple-400 rounded px-3 border w-full pt-1 pb-2"
            type="submit"
            id=""
          />
        </fieldset>
      </form>
    </div>
  );
};

export default addPost;
