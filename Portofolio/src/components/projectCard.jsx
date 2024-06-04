import React, { useState } from "react";

const ProjectCard = ({ title, img, about, stacks, website, github }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-span-1 lg:col-span-1 h-[300px] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white p-6 rounded-lg shadow-md h-full relative">
        <img
          className="object-cover w-full h-full absolute top-0 left-0"
          src={img}
          alt={title}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-gray-500 to-transparent transition-opacity duration-300 ease-in">
            <h4 className="text-white text-lg font-semibold mb-5">{title}</h4>
            <div className="flex flex-wrap justify-center mb-10">
              {stacks.map((stack, index) => (
                <span
                  key={index}
                  className="text-white bg-gray-700 rounded-full px-3 py-1 text-sm m-1"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
