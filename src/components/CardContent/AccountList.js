import React from "react";
import AccountCard from "./AccountCard";

const AccountList = (props) => {
  return (
    <div className="mb-9 grid grid-cols-1 gap-x-4 gap-y-0 lg:grid-cols-3">
      {props.datas.map((data) => (
        <AccountCard
          key={data.id}
          href={data.link}
          image={data.image}
          name={data.name}
          username={data.username}
          isDisabled={data.disabled}
        />
      ))}
    </div>
  );
};

export default AccountList;
