import React from "react";

const OperatorButton = (props) => {
  const buttonText = props.buttonText;
  const buttonValue = props.buttonValue;

  return (
    <button className="operator-button" onClick={() => props.clickHandler(buttonValue)}>{buttonText}</button >
  );
};


export default OperatorButton;