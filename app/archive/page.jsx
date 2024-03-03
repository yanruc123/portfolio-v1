import ProjectArchive from "./ProjectArchive";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { about } from "../custom/info";

export default function Archive() {
  return (
    <div className="bg-background min-h-screen px-5 sm:px-16 lg:px-28 py-20">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-secondary font-semibold pl-2 pb-5 rounded group text-xl"
        >
          <FaArrowLeft
            className="transition-transform duration-200 ease-in-out group-hover:-translate-x-1 mr-2"
            style={{ display: "inline-block" }}
          />
          {about.name}
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-textMain mb-4 pl-2">All Projects</h1>
      </div>
      <ProjectArchive />
    </div>
  );
}
