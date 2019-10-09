import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";

import { operators, specials } from "./data";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [displayValue, setDisplayValue] = useState(0);
  const [currentOperation, setCurrentOperation] = useState(null);
  const [operand, setOperand] = useState(null);

  function appendDisplayValue(value) {
    if (displayValue === 0) {
      setDisplayValue(`${value}`)
    } else if (displayValue.length < 10) {
      setDisplayValue(() => `${displayValue}${value}`);
    }
  }

  function setOperator(operator) {
    setCurrentOperation(prevOp => {
      console.log(`${prevOp} | ${operator}`);
      if (operator === '=') {
        console.log(`Operand has a quantity ${operand}`);
        switch (prevOp) {
          case '+': {
            console.log(`Addition ${operand} + ${displayValue} = ${Number(operand) + Number(displayValue)}`)

            setDisplayValue(`${Number(operand) + Number(displayValue)}`);

            setOperand(null);

            break;
          }
          case '-': {
            // console.log(`Addition ${operand} + ${displayValue} = ${Number(operand) + Number(displayValue)}`)

            setDisplayValue(`${Number(operand) - Number(displayValue)}`);

            setOperand(null);

            break;
          }
          case '*': {
            // console.log(`Addition ${operand} + ${displayValue} = ${Number(operand) + Number(displayValue)}`)

            setDisplayValue(`${Number(operand) * Number(displayValue)}`);

            setOperand(null);

            break;
          }
          case '/': {
            // console.log(`Addition ${operand} + ${displayValue} = ${Number(operand) + Number(displayValue)}`)
            setDisplayValue(`${Number(operand) / Number(displayValue)}`);

            setOperand(null);

            break;
          }
        }
      } else {
        setOperand(Number(displayValue));
        setDisplayValue(0);
        console.log(`Set operand to ${displayValue}`);
      }
      return operator;
    });

    // if(currentOperation === '='){
    //   setCurrentOperation(null);
    // }
    // if (currentOperation !== '=') {
    //   console.log("test")
    // }

  }

  function specialOperators(value) {
    switch (value) {
      case specials[0]: {
        setDisplayValue(0);
        break;
      }
      case specials[1]: {
        let negate = Number(-displayValue);
        setDisplayValue(() => `${negate}`);
        break;
      }
    }
  }

  return (
    <div className="container">
      <Logo />
      <Display value={displayValue} />
      <div className="button-container">
        <div className="number-container">
          <Specials btnClickHandler={specialOperators} />
          <Numbers btnClickHandler={appendDisplayValue} />
        </div>
        <div className="operator-container">
          <Operators btnClickHandler={setOperator} />
        </div>
      </div>
    </div>
  );
}

export default App;
