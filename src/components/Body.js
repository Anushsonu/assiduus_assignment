import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <Header />
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
