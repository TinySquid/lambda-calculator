import React from "react";

const OperatorButton = (props) => {
  const buttonText = props.buttonText;

  return (
    <button className="operator-button">{buttonText}</button >
  );
};


export default OperatorButton;