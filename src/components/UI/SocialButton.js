import React from "react";

const SocialButton = (props) => {
  const aClass = `mx-4 rounded-full p-2.5 w-16 h-16 lg:w-25 lg:h-25 ${
    props.disabled ? "bg-neutral-90 hover:cursor-not-allowed" : "bg-neutral-100"
  }`;
  const imgClass = `w-full h-full ${props.disabled ? "opacity-60" : ""}`;
  const linkTo = props.disabled ? "#" : props.href;

  return (
    <a href={linkTo} className={aClass}>
      <img src={props.image} alt={props.name} className={imgClass} />
    </a>
  );
};

export default SocialButton;
