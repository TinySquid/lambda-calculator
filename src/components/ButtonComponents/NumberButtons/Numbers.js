import React, { useState } from "react";
import NumberButton from "./NumberButton";

import { numbers } from '../../../data';

const Numbers = (props) => {
  const [numberState] = useState(numbers);

  return (
    numberState.map((button, idx) => (
      <NumberButton key={idx} buttonText={button} buttonValue={button} clickHandler={props.btnClickHandler} />
    ))
  );
};

export default Numbers;