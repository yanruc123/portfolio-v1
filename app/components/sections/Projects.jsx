import React from "react";
import ProjectComponent from "../project/ProjectComponent";
import { GoArrowUpRight } from "react-icons/go";
import { projects } from "@/app/custom/info";

const Projects = () => {
  return (
    <div id="projects" className="space-y-4">
      <h1 className="text-2xl font-bold pt-12 lg:pt-20 px-2 lg:px-0">Projects</h1>
      {projects.map((project, index) => (
        <ProjectComponent
          key={index}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
          title={project.title}
          description={project.description}
          tools={project.tools}
        />
      ))}

      <div className="pt-4">
        <a
          href="/archive"
          className="inline-flex items-center text-primary hover:text-secondary group"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Project Archive
          <GoArrowUpRight className="ml-1 transition-transform duration-200 transform translate-x-[-2px] translate-y-[2px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
