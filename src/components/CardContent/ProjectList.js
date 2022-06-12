import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = (props) => {
  return (
    <div
      className="mb-9 grid grid-cols-1 gap-x-4 gap-y-0 lg:grid-cols-3"
      id="project_list"
    >
      {props.datas.map((data) => (
        <ProjectCard
          key={data.id}
          link={data.link}
          title={data.title}
          desc={data.description}
          tech={data.technology}
        />
      ))}
    </div>
  );
};

export default ProjectList;
