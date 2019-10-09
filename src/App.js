import React, { useState } from "react";

import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";

import { specials } from "./data";

import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentOperation, setCurrentOperation] = useState(null);
  const [operand, setOperand] = useState(null);

  function appendDisplayValue(value) {
    if (Number(displayValue) === 0 && value !== '.' && displayValue.search(/[.]/) === -1) {
      setDisplayValue(`${value}`)
    } else {
      if (displayValue.length < 10) {
        if (value === '.' && displayValue.search(/[.]/) >= 0) {
        } else {
          setDisplayValue(() => `${displayValue}${value}`);
        }
      }
    }
  }

  function setOperator(operator) {
    setCurrentOperation(prevOp => {
      if (operator === '=' && operand !== 0) {
        switch (prevOp) {
          case '+': {
            // console.log(`${Number(operand) + Number(displayValue)}`)
            setDisplayValue(`${Math.round((Number(operand) + Number(displayValue)) * 100) / 100}`);
            setOperand(null);

            break;
          }
          case '-': {
            // console.log(`${Number(operand) - Number(displayValue)}`)
            setDisplayValue(`${Math.round((Number(operand) - Number(displayValue)) * 100) / 100}`);
            setOperand(null);

            break;
          }
          case '*': {
            // console.log(`${Number(operand) * Number(displayValue)}`)
            setDisplayValue(`${Math.round((Number(operand) * Number(displayValue)) * 100) / 100}`);
            setOperand(null);

            break;
          }
          case '/': {
            // console.log(`${Number(operand) / Number(displayValue)}`)
            setDisplayValue(`${Math.round((Number(operand) / Number(displayValue)) * 100) / 100}`);
            setOperand(null);

            break;
          }
        }
      } else {
        setOperand(Number(displayValue));
        setDisplayValue('0');
      }
      return operator;
    });
  }

  function specialOperators(value) {
    switch (value) {
      case specials[0]: {
        setDisplayValue('0');
        break;
      }
      case specials[1]: {
        setDisplayValue(() => `${Number(-displayValue)}`);
        break;
      }
      case specials[2]: {
        console.log('Yeet');
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
