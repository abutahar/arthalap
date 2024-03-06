"use client";
import React from "react";
import { useEffect } from "react";

const ErrorPage = () => {
  return (
    <div className="text-center h-[85vh]">
      <h1>Sorry , something went wrong</h1>
    </div>
  );
};
// Error components must be Client Components

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
export { ErrorPage };
