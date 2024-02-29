import React, { createContext, useState, useContext } from "react";
import addPost from "../addpost/page";
import { headers } from "next/headers";
import Header from "../shared/Header";

const AllContext = createContext();
export const contextProvider = ({ children }) => {
  const [state, setState] = useState("Default State");

  const updateState = (newState) => {
    setState(newState);
  };

  const data = {
    name: "teaher",
    state,
    updateState,
  };

  return (
    <AllContext.Provider value={data}>
      {children}
      {addPost}
      {Header}
    </AllContext.Provider>
  );
};
export const useAllContext = () => {
  return useContext(AllContext);
};
