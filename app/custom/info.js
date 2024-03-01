import myImage from "./test.jpg";

const about = {
  name: "Jane Doe",
  title: "Full Stack Engineer",
  shortDescription:
    "Passionate about building engaging and innovative software applications.",
};

const aboutParagraphs = [
  `With a strong educational background in Computer Science, I have embarked on a journey through various aspects of software development. From front-end to back-end and everything in between, my focus has always been on creating user-centric solutions.`,
  `My professional experience spans across working with startups and tech giants, where I've contributed to team-driven projects and solo endeavors. My toolkit includes a wide range of technologies, and I'm always keen on learning more.`,
];

const experiences = [
  {
    timeframe: "Year - Present",
    title: "Software Developer",
    company: "Tech Company",
    location: "Location",
    description:
      "Engaged in developing cutting-edge solutions using modern web technologies. Focused on creating responsive and scalable applications.",
    tools: ["React", "Node.js", "Docker"],
    links: [
      { text: "Company Website", url: "https://www.google.com" },
    ],
  },
  {
    timeframe: "Year - Year",
    title: "UI/UX Designer",
    company: "Creative Design Studio",
    location: "Location",
    description:
      "Led the design of user interfaces and user experiences for mobile and web applications. Collaborated closely with developers and product managers to create visually appealing and user-friendly designs.",
    tools: ["Adobe XD", "Figma", "Sketch"],
    links: [
      { text: "Design Portfolio", url: "https://www.google.com" },
    ],
  },
  {
    timeframe: "Year - Year",
    title: "Data Analyst",
    company: "Data Analysis Firm",
    location: "Location",
    description:
      "Analyzed large datasets to extract actionable insights and support business decisions. Used statistical tools and machine learning techniques to forecast trends and evaluate business strategies.",
    tools: ["Python", "R", "SQL"],
    links: [
      { text: "Analysis Project", url: "https://www.google.com" },
    ],
  }  
  // Add more experiences as needed
];

const projects = [
  {
    imageUrl: myImage,
    projectUrl: "https://www.google.com",
    title: "Project Title",
    description:
      "A brief description of the project, highlighting the problem it solves, the technologies used, and the impact it made.",
    tools: ["Technology 1", "Technology 2"],
  },
  {
    imageUrl: myImage,
    projectUrl: "https://www.google.com",
    title: "E-commerce Platform",
    description:
      "Developed a comprehensive e-commerce platform to streamline online shopping. Implemented features such as product listings, a shopping cart, and secure payment processing.",
    tools: ["React", "Node.js", "Stripe API"],
  },
  {
    imageUrl: myImage,
    projectUrl: "https://www.google.com",
    title: "Social Media Dashboard",
    description:
      "Created a dashboard for social media analytics, providing insights into follower growth, engagement rates, and content performance. Enabled brands to make data-driven decisions.",
    tools: ["Vue.js", "Firebase", "Chart.js"],
  },
  {
    imageUrl: myImage,
    projectUrl: "https://www.google.com",
    title: "Task Management Tool",
    description:
      "Built a task management tool to help teams track project progress, assign tasks, and set deadlines. Included features like task prioritization, notifications, and collaborative workspaces.",
    tools: ["Angular", "Express", "MongoDB"],
  }  
  // Add more projects as needed
];

const education = [
  {
    schoolName: "University Name",
    timeframe: "Start Year - End Year",
    description: "Degree, Major",
  },
  // Add more education entries as needed
];

const links = {
  courseraLink: "https://www.google.com",
  linkedinLink: "https://www.google.com",
  githubLink: "https://www.google.com",
};

const allProjects = [
  {
    year: "2022",
    name: "Project Title",
    madeAt: "Tech Startup",
    buildWith: ["Technology 1", "Technology 2"],
    link: "https://www.google.com",
  },
  {
    year: "2021",
    name: "E-commerce Platform",
    madeAt: "E-commerce Solutions",
    buildWith: ["React", "Node.js", "Stripe API"],
    link: "https://www.google.com",
  },
  {
    year: "2020",
    name: "Social Media Dashboard",
    madeAt: "Social Analytics Inc.",
    buildWith: ["Vue.js", "Firebase", "Chart.js"],
    link: "https://www.google.com",
  },
  {
    year: "2019",
    name: "Task Management Tool",
    madeAt: "Productivity Software Ltd.",
    buildWith: ["Angular", "Express", "MongoDB"],
    link: "https://www.google.com",
  },
  // Add more projects as needed
];

const skills = {
  "Programming Languages": "Python, JavaScript, TypeScript, Java, C#, Go, Ruby, Swift",
  "Frontend Development": "HTML5, CSS3, JavaScript, React, Vue.js, Angular, Next.js, Tailwind CSS, Bootstrap",
  "Backend Development": "Node.js, Express, Django, Flask, Ruby on Rails, ASP.NET, Spring Boot",
  // Add more skills and categories as needed
};

const resumeUrl = "https://www.google.com";

export { about, links, aboutParagraphs, experiences, projects, education, allProjects, skills, resumeUrl };
