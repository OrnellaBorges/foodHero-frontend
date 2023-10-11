import React from "react";
import SideMenu from "./SideBar Section/SideMenu";
import Body from "./BodySection/BodyNew";

const Container = () => {
  return (
    <div className="flex h-[p0vh] items-center justify-center w-[85vw] my-10 rounded-xl overflow-hidden bg-[blue]">
      <SideMenu />
      <Body />
    </div>
  );
};

export default Container;
