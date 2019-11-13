import React from "react";

const SpecialButton = (props) => {
  const specialOperators = props.clickHandler;

  return (
    <button className="special-button" onClick={() => specialOperators(props.buttonValue)}>{props.buttonText}</button >
  );
};


export default SpecialButton;