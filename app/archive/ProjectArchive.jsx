import React from "react";
import { allProjects } from "../custom/info";
import { GoArrowUpRight } from "react-icons/go";

const sortProjectsByYear = (projectList) => {
  return projectList.sort((a, b) => b.year.localeCompare(a.year));
};

const ProjectArchive = () => {
  const sortedProjects = sortProjectsByYear(allProjects);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-background text-textMain">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Year
            </th>
            {/* Show on all screens */}
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider md:table-cell hidden">
              Project Name
            </th>
            {/* Hide on mobile */}
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider md:hidden">
              Project
            </th>
            {/* Tablet and up */}
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden lg:table-cell">
              Made at
            </th>
            {/* Desktop only */}
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden lg:table-cell">
              Build with
            </th>
            {/* Tablet and up */}
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody className="bg-background divide-y divide-gray-200">
          {sortedProjects.map((project, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm text-gray-900">
                {project.year}
              </td>
              {/* Desktop and Tablet: Project Name without link */}
              <td className="px-6 py-4 text-sm text-gray-900 md:table-cell hidden">
                {project.name}
              </td>
              {/* Mobile: Project Name with link */}
              <td className="px-6 py-4 text-sm text-gray-900 md:table-cell block md:hidden">
                {project.link ? (
                  <a
                    href={project.link}
                    className="inline-flex items-center text-textMain hover:text-secondary group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                    <GoArrowUpRight className="ml-1" />
                  </a>
                ) : (
                  project.name
                )}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 hidden lg:table-cell">
                {project.madeAt}
              </td>
              <td className="px-6 py-4 text-sm hidden lg:table-cell">
                {project.buildWith.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="inline-block bg-secondary text-white rounded-full px-3 py-1 text-sm mr-2 mb-2 whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </td>
              <td className="px-6 py-4 text-sm hidden sm:table-cell">
                {project.link !== "" && (
                  <>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-textMain hover:text-secondary group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link.replace(/^https?:\/\//, '')}
                      <GoArrowUpRight className="ml-1" />
                    </a>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectArchive;