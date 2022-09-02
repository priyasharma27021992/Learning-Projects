import React, { useReducer } from "react";

import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";

import calculateReducer from "./reducers/calculateReducer";
import { CALCULATE_ACTIONS as ACTIONS } from "./actions/calculateAction";

import { formatOperand } from "./common/utils";
import "./style.css";

function App() {
  const [state, dispatch] = useReducer(calculateReducer, {});

  const { currentOperand, previousOperand, operation } = state;

  const handleClear = () => {
    dispatch({
      type: ACTIONS.CLEAR,
    });
  };
  const handleEqual = () => {
    dispatch({
      type: ACTIONS.EVALUATE,
    });
  };
  const handleDelete = () => {
    dispatch({
      type: ACTIONS.DELETE_DIGIT,
    });
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)}
          {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button className="span-two" onClick={handleClear}>
        AC
      </button>
      <button onClick={handleDelete}>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two" onClick={handleEqual}>
        =
      </button>
    </div>
  );
}

export default App;
