import React from "react";

const NumberButton = (props) => {
  const buttonText = props.buttonText;
  const buttonValue = props.buttonValue;
  const appendDisplayValue = props.clickHandler;

  return (
    <button className="number-button" onClick={() => appendDisplayValue(buttonValue)}>{buttonText}</button >
  );
};

export default NumberButton;