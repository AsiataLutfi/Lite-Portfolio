import React from "react";

// Components
import Card from "../UI/Card";

const AccountCard = (props) => {
  const linkTo = props.isDisabled ? "#" : props.href;
  const username = props.isDisabled ? "-" : props.username;

  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noreferrer noopener"
      className={`${
        props.isDisabled
          ? "pointer-events-none opacity-50 hover:cursor-not-allowed"
          : ""
      }`}
    >
      <Card className="items-center lg:flex-col lg:items-start">
        <img
          src={props.image}
          alt={props.name}
          className="mr-6 h-9 w-9 lg:mb-[74px] lg:h-[50px] lg:w-[50px]"
        />
        <h4 className="text-xl font-medium lg:mb-2.5 lg:text-2xl">
          {props.name}
        </h4>
        <h6 className="hidden text-lg lg:block">{username}</h6>
      </Card>
    </a>
  );
};

export default AccountCard;
