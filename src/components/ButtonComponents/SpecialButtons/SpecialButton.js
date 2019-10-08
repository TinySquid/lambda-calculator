import React from "react";

const SpecialButton = (props) => {
  const buttonText = props.buttonText;
  const buttonValue = props.buttonValue;
  const specialOperators = props.clickHandler;

  return (
    <button className="special-button" onClick={() => specialOperators(buttonValue)}>{buttonText}</button >
  );
};


export default SpecialButton;