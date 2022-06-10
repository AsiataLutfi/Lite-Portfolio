import React from "react";

const Card = (props) => {
  return (
    <div
      className={`flex rounded-[10px] bg-neutral-100 py-[22px] px-[34px] ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Card;
