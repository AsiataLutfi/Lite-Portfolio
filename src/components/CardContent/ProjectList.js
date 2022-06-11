import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = (props) => {
  return (
    <ul className="mb-9" id="project_list">
      {props.datas.map((data) => {
        return (
          <li key={data.id} className="mb-4">
            <ProjectCard
              link={data.link}
              title={data.title}
              desc={data.description}
              tech={data.technology}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
