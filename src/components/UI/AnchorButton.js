import React from "react";

const AnchorButton = (props) => {
  let classes =
    "rounded-[10px] px-4 py-6 font-medium uppercase text-md text-center";

  if (props.type === "default") {
    classes = classes + " bg-neutral-10 text-neutral-100";
  }

  if (props.type === "outlined") {
    classes =
      classes + " bg-transparent border-neutral-10 border text-neutral-10";
  }

  return (
    <a href={props.anchor} className={`${classes} ${props.className}`}>
      {props.children}
    </a>
  );
};

export default AnchorButton;
