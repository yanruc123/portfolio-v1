import React from "react";

const EducationComponent = ({
  timeframe,
  schoolName,
  description,
}) => {
  return (
    <div className="group flex flex-col md:flex-row justify-between mb-0 md:mb-3 md:border-2 border-transparent md:hover:border-hoverBorder rounded-lg transition-all p-2 md:p-4 w-full">
      {/* Timeframe */}
      <div className="w-full md:w-32 pt-0.5 font-bold text-textMain text-left">
        {timeframe}
      </div>
      
      {/* Education Details */}
      <div className="flex-1 md:ml-4 mt-2 md:mt-0">
        <div className="font-bold text-lg text-textMain group-hover:text-secondary transition-colors">
          {schoolName}
        </div>
        <p className="mt-2 text-textMain">{description}</p>
      </div>
    </div>
  );
};

export default EducationComponent;
