import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 pt-16 lg:pt-32 px-2 lg:px-5 text-textMain">
      <p>
        Crafted with 💙 in{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary hover:text-hoverBorder"
        >
          Visual Studio Code
        </a>{" "}
        by me. Built using{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary hover:text-hoverBorder"
        >
          Next.js
        </a>{" "}
        &
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary hover:text-hoverBorder"
        >
          {" "}
          Tailwind CSS
        </a>{" "}
        and deployed on{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary hover:text-hoverBorder"
        >
          Vercel
        </a>
        . A big shoutout to my friends and the countless online contributors who
        inspired and helped along the way!
      </p>
    </div>
  );
};

export default Footer;
