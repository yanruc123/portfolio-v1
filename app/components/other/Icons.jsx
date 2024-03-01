import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { links } from "@/app/custom/info";

const Icons = () => {
  return (
    <div className="flex space-x-4 pt-6 lg:pt-0">
      <a
        href={links.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl hover:text-secondary transform transition duration-150 ease-in-out cursor-pointer"
      >
        <FaGithub title="Github" />
      </a>
      <a
        href={links.linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl hover:text-secondary transform transition duration-150 ease-in-out cursor-pointer"
      >
        <FaLinkedin title="LinkedIn" />
      </a>
      <a
        href={links.courseraLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl hover:text-secondary transform transition duration-150 ease-in-out cursor-pointer"
      >
        <SiCoursera title="Coursera" />
      </a>
    </div>
  );
};

export default Icons;
