import React from "react";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Certifications</h2>
      <div>
        {CERTIFICATIONS.map((certification, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">
                {certification.mop}, {certification.yop}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {certification.level} -{" "}
                <span className="text-sm text-stone-500 text-nowrap">
                  {certification.name}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">
                Score: {certification.score} / 180
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
