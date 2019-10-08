import React, { useState } from "react";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file
import { specials } from '../../../data';

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialState.map((button, idx) => (
        <SpecialButton key={idx} buttonText={button} buttonValue={button} clickHandler={props.btnClickHandler} />
      ))}
    </div>
  );
};


export default Specials;