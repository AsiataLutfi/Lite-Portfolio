import React from "react";

const Container = (props) => {
  return (
    <div className="container mx-auto px-4 lg:px-12">{props.children}</div>
  );
};

export default Container;
