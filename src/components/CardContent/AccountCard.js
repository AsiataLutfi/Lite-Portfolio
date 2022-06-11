import React from "react";

// Components
import Card from "../UI/Card";

const AccountCard = (props) => {
  const linkTo = props.disabled ? "#" : props.href;

  return (
    <a href={linkTo}>
      <Card className="items-center">
        <img src={props.image} alt={props.name} className="mr-6 h-9 w-9" />
        <p className="text-xl font-medium">{props.name}</p>
      </Card>
    </a>
  );
};

export default AccountCard;
