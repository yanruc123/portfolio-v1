import React from "react";
import { FaLink } from "react-icons/fa";

const ExperienceComponent = ({
  timeframe,
  title,
  company,
  description,
  tools,
  links = [],
}) => {
  return (
    <div className="group flex flex-col md:flex-row justify-between mb-3 md:border-2 border-transparent md:hover:border-hoverBorder rounded-lg transition-all p-4 w-full">
      <div className="w-full md:w-32 pt-0.5 font-bold md:font-bold text-textMain text-left">
        {timeframe}
      </div>
      <div className="flex-1 md:ml-4 mt-2 md:mt-0">
        <div className="font-bold text-lg text-textMain group-hover:text-secondary transition-colors">
          {title} • {company}
        </div>
        <p className="mt-2 text-textMain">{description}</p>
        <div className="py-1">
          {links.length > 0 && (
            <div className="mt-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="inline-flex items-center text-textMain hover:text-secondary mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink
                    className="mr-1"
                    style={{ transform: "scale(0.9)" }}
                  />
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
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
  );
};

export default ExperienceComponent;
