import React from "react";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Achievements</h2>
      <div>
        {ACHIEVEMENTS.map((achievement, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">
                {achievement.month && `${achievement.month}, `}
                {achievement.year}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">{achievement.title}</h3>
              <p className="mb-4 text-stone-400">{achievement.decription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
