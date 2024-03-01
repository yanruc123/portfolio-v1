import React from "react";
import EducationComponent from "../education/EducationComponent";
import { education } from "@/app/custom/info";
import SkillComponent from "../education/SkillComponent";

const Education = () => {
  return (
    <div id="other" className="space-y-4">
      <h1 className="text-2xl font-bold pt-12 lg:pt-20 px-2 lg:px-0">Education</h1>
      {education.map((edu, index) => (
        <EducationComponent
          key={index}
          timeframe={edu.timeframe}
          schoolName={edu.schoolName}
          description={edu.description}
        />
      ))}

      <SkillComponent />
    </div>
  );
};

export default Education;
