import React from "react";
import Navigation from "./Navigation";
import Icons from "./other/Icons";
import { about } from "../custom/info";

const Sidebar = () => {
  return (
    <div className="bg-background flex flex-col justify-between py-12 pl-6 lg:sticky lg:top-0 lg:h-screen lg:w-2/5 lg:py-24 lg:pl-32 w-full pr-16 lg:pr-0">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold">{about.name}</h1>
        <p className="text-lg mt-4 font-semibold">{about.title}</p>
        <p className="mt-3 lg:mt-4">{about.shortDescription}</p>
        <Navigation />
      </div>
      <Icons />
    </div>
  );
};

export default Sidebar;
