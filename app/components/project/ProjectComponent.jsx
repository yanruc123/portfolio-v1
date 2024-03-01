import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const ProjectComponent = ({
  imageUrl,
  projectUrl,
  title,
  description,
  tools,
}) => {
  return (
    <a
      href={projectUrl}
      className="block"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group flex md:flex-row flex-col-reverse md:space-x-4 space-y-0 md:hover:border-hoverBorder md:border-2 border-transparent rounded-lg transition-all p-4">
        <div className="md:w-200 md:h-50 relative pt-2">
          <Image
            src={imageUrl}
            width={200}
            height={70}
            alt={title}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col w-full">
          <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">
            {title}
            <GoArrowUpRight className="inline-block ml-1 transition-transform duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </h3>
          <p className="mt-2">{description}</p>

          {/* Tools */}
          <div className="mt-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="inline-block bg-secondary text-white rounded-full px-3 py-1 text-sm mr-2 mb-2"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectComponent;
