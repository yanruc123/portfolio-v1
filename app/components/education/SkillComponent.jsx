import React from 'react';
import { skills } from '@/app/custom/info';

const SkillComponent = () => {
  return (
    <div className="space-y-2 pt-12 lg:pt-24">
      <h1 className="text-2xl font-bold pb-2 px-2 lg:px-0">Skills</h1>
      {Object.entries(skills).map(([category, sks], index) => (
        <p key={index} className="text-md text-textMain pl-2 lg:pl-0 ">
          <strong className="font-bold">{category}:</strong> {sks}
        </p>
      ))}
    </div>
  );
};


export default SkillComponent;
