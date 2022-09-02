import React from "react";
import { CALCULATE_ACTIONS as ACTIONS } from "../actions/calculateAction";

const DigitButton = ({ dispatch, digit }) => {
  const addDigit = () => {
    dispatch({
      type: ACTIONS.ADD_DIGIT,
      payload: {
        digit,
      },
    });
  };
  return <button onClick={addDigit}>{digit}</button>;
};

export default DigitButton;
