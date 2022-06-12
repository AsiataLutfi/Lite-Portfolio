import React from "react";

// Components
import Card from "../UI/Card";

const ProjectCard = (props) => {
  const techList = props.tech.join(", ");

  return (
    <a href={props.link}>
      <Card className="flex-col">
        <h4
          className="mb-2.5 text-xl font-medium line-clamp-1 lg:text-2xl"
          title={props.title}
        >
          {props.title}
        </h4>
        <h6 className="mb-20 text-lg line-clamp-2" title={props.desc}>
          {props.desc}
        </h6>
        <p className="text-sm lg:text-md">{techList}</p>
      </Card>
    </a>
  );
};

export default ProjectCard;
