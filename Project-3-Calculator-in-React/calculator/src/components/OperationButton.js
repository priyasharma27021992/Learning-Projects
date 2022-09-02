import React from "react";
import { CALCULATE_ACTIONS as ACTIONS } from "../actions/calculateAction";

const OperationButton = ({ dispatch, operation }) => {
  const chooseOperation = () => {
    dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: {
        operation,
      },
    });
  };
  return <button onClick={chooseOperation}>{operation}</button>;
};

export default OperationButton;
