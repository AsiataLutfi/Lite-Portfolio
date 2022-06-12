import React from "react";

const SocialButton = (props) => {
  const aClass = `mx-4 rounded-full p-2.5 w-16 h-16 lg:w-25 lg:h-25 bg-neutral-100 ${
    props.disabled ? "opacity-50 pointer-events-none" : ""
  }`;
  const linkTo = props.disabled ? "#" : props.href;

  return (
    <a href={linkTo} className={aClass}>
      <img src={props.image} alt={props.name} className="h-full w-full" />
    </a>
  );
};

export default SocialButton;
