import React from "react";

const Display = (props) => {
  const number = props.value;

  return <div className="display">{number}</div>;
};

export default Display;