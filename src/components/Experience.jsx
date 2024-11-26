import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              <div className="flex overflow-x-auto overflow-y-hidden">
                {experience.technologies.map((technology, index) => (
                  <p
                    className="w-fit text-nowrap mr-2 rounded bg-gradient-to-r from-stone-800 to-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {technology}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
