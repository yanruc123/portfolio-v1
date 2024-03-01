import React from "react";
import { aboutParagraphs } from "@/app/custom/info";

const About = () => {
  return (
    <div id="about" className="space-y-4">
      <h1 className="text-2xl font-bold pt-12 lg:pt-24 px-2 lg:px-0">About Me</h1>
      {aboutParagraphs.map((paragraph, index) => (
        <p key={index} className="px-2 lg:px-0">{paragraph}</p>
      ))}
    </div>
  );
};

export default About;
