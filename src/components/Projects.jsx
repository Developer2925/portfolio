import React from "react";
import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className=" overflow-x-auto overflow-y-hidden flex">
                {project.technologies.map((technology, index) => (
                  <p
                    className="w-fit text-nowrap mr-2 rounded bg-gradient-to-r from-stone-800 to-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {technology}
                  </p>
                ))}
              </div>
              <div className="mt-3 flex gap-4">
                {project.githubRepo && (
                  <a href={project.githubRepo} target="_blank">
                    <FaGithub className="text-2xl" />
                  </a>
                )}
                {project.projectLink && (
                  <a href={project.projectLink} target="_blank">
                    <FiLink className="text-2xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
