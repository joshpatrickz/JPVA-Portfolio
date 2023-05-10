import React from "react";
import projectData from "../data/projectData";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div name="portfolio" className="flex flex-col items-center justify-center mt-20 py-10">
        <div className="py-10">
            <h1 className="text-4xl">My Projects</h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <PortfolioItem
            key={index}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
