"use client";
import React, { useState, useEffect } from 'react';
import colors from '@/app/custom/color';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('about');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to update tab based on scroll
  const handleScroll = () => {
    const sections = ['about', 'experience', 'projects', 'other'];
    let currentSection = activeTab;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= 0) {
        currentSection = section;
      }
    });

    setActiveTab(currentSection);
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  // Existing style definitions
  const lineBaseClass = 'transition-all duration-300 ease-in-out';
  const lineStyle = (tab) => ({
    display: 'inline-block',
    height: activeTab === tab ? '2px' : '1px',
    backgroundColor: activeTab === tab ? colors.primary : 'black',
    width: activeTab === tab ? '65px' : '25px',
    marginRight: '8px',
    verticalAlign: 'middle',
  });
  const tabClass = (tab) =>
    `mb-6 cursor-pointer ${
      activeTab === tab ? 'font-bold text-primary' : 'text-textMain'
    } hover:text-primary hover:font-bold transition-all duration-300`;

  // Navigation render
  return (
    <nav className="hidden lg:block mt-8 pt-7">
      <ul>
        {['about', 'experience', 'projects', 'other'].map((tab) => (
          <li key={tab} className={tabClass(tab)} onClick={() => handleTabClick(tab)}>
            <span className={lineBaseClass} style={lineStyle(tab)}></span>
            <a href={`#${tab}`}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
