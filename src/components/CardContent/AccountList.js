import React from "react";
import AccountCard from "./AccountCard";

const AccountList = (props) => {
  return (
    <ul className="mb-9">
      {props.datas.map((data) => {
        return (
          <li key={data.id} className="mb-4">
            <AccountCard
              href={data.link}
              image={data.image}
              name={data.name}
              isDisabled={data.disabled}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default AccountList;
