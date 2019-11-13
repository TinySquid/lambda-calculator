import React from "react";

const OperatorButton = (props) => {
  const setOperator = props.clickHandler;

  return (
    <button className="operator-button" onClick={() => setOperator(props.buttonValue)}>{props.buttonText}</button >
  );
};


export default OperatorButton;