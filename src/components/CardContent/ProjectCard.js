import React from "react";

// Components
import Card from "../UI/Card";

const ProjectCard = (props) => {
  const techList = props.tech.join(", ");

  return (
    <a href={props.link}>
      <Card className="flex-col">
        <h4 className="mb-[10px] text-xl font-medium">{props.title}</h4>
        <h6 className="mb-20 text-lg">{props.desc}</h6>
        <p className="text-sm">{techList}</p>
      </Card>
    </a>
  );
};

export default ProjectCard;
