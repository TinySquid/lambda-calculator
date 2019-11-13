import React, { useState } from "react";
import OperatorButton from "./OperatorButton";

import { operators } from '../../../data';

const Operators = (props) => {
  const [operatorState] = useState(operators);

  return (
    operatorState.map((button, idx) => (
      <OperatorButton key={idx} buttonText={button.char} buttonValue={button.value} clickHandler={props.btnClickHandler} />
    ))
  );
};

export default Operators;

