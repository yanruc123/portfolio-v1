import React from "react";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Footer from "./other/Footer";

const MainContent = () => {
  return (
    <div className="w-full lg:w-3/5 pb-12 lg:pb-24 pr-4 lg:pr-36 pl-4 lg:pl-9 bg-emerald-50">
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};

export default MainContent;
