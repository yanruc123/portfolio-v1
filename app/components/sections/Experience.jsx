import React from "react";
import ExperienceComponent from "../experience/ExperienceComponent";
import { GoArrowUpRight } from "react-icons/go";
import { experiences } from "@/app/custom/info";
import { resumeUrl } from "@/app/custom/info";

const Experience = () => {
  return (
    <div id="experience" className="space-y-4">
      <h1 className="text-2xl font-bold pt-12 lg:pt-20 px-2 lg:px-0">Experience</h1>
      {experiences.map((exp, index) => (
        <ExperienceComponent
          key={index}
          timeframe={exp.timeframe}
          title={exp.title}
          company={exp.company}
          description={exp.description}
          tools={exp.tools}
          links={exp.links}
        />
      ))}

      <div className="lg:pt-4 pl-4">
        <a
          href={resumeUrl}
          className="inline-flex items-center text-primary hover:text-secondary group"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Resume
          <GoArrowUpRight className="ml-1 transition-transform duration-200 transform translate-x-[-2px] translate-y-[2px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

export default Experience;
