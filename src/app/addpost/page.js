"use client";
import React, { useState } from "react";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const addPost = () => {
  // state declaration
  const [response, setResponse] = useState({});
  const [err, setErr] = useState("");
  const user = { name: "taher" };

  // form handler function
  const formHandle = (e) => {
    e.preventDefault();
    // declarations
    const time = new Date();
    const postTime = time.toString();
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
            setResponse(res);
            form.reset();
            toast.success("Thank you for this post!", { autoClose: 2000 });
          });
      } catch (err) {
        setErr("something wrong!!");
        toast.error("Problems to post");
      }
    } else if (!title && !post) {
      form.title.focus();
      setErr("please fill up the form first");
      setTimeout(() => {
        setErr("");
      }, 2000);
    } else if (title.length < 20) {
      setErr("title should be more than 20 character");
      setTimeout(() => {
        setErr("");
      }, 2000);
      form.title.focus();
    } else {
      form.post.focus();
      setErr("post should be more than 200 character");
      setTimeout(() => {
        setErr("");
      }, 2000);
    }
  };

  return (
    <div className="p-4 transition-all">
      <ToastContainer></ToastContainer>;
      <h3 className="text-center text-xl md:text-2xl uppercase ">
        add your post here
      </h3>
      <form
        onSubmit={formHandle}
        className="w-full md:w-1/2  rounded-md mt-4 mx-auto md:mt-10 px-3 "
      >
        <fieldset className="border border-black rounded md:rounded-lg lg:rounded-2xl px-5 pb-3 pt-2 lg:px-12 lg:py-8 ">
          <legend className="px-1 uppercase text-sm">
            Give the needed data
          </legend>
          <label
            htmlFor="title"
            className="text-gray-600 text-sm mt-1 md:font-normal uppercase"
          ></label>
          <input
            autoFocus
            className="mt-2 mb-2 md:h-12 md:text-xl font-serif outline-purple-400 rounded px-3 border w-full pt-1 pb-2"
            type="text"
            name="title"
            placeholder="Type the Title of your Article"
            id="title"
          />
          <label htmlFor="post" className="text-gray-600 text-sm mt-1"></label>
          <textarea
            className="mt-2 mb-2  outline-purple-400 rounded px-3 border w-full pt-1 pb-2 md:text-xl font-serif md:h-32 lg:h-36"
            type="textaria"
            name="post"
            placeholder="Type your article body"
          />

          <div className="text-sm text-red-700 lowercase">
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
