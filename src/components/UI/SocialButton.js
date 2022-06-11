import React from "react";

const SocialButton = (props) => {
  const aClass = `mx-4 rounded-full p-[10px] ${
    props.disabled ? "bg-neutral-90 hover:cursor-not-allowed" : "bg-neutral-100"
  }`;
  const imgClass = `h-11 w-11 ${props.disabled ? "opacity-60" : ""}`;
  const linkTo = props.disabled ? "#" : props.href;

  return (
    <a href={linkTo} className={aClass}>
      <img src={props.image} alt={props.name} className={imgClass} />
    </a>
  );
};

export default SocialButton;
