import { CALCULATE_ACTIONS as ACTIONS } from "../actions/calculateAction";
import { evaluate } from "../common/utils";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT: {
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === 0 && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    }
    case ACTIONS.CHOOSE_OPERATION: {
      if (state.currentOperand == null && state.previousOperand == null)
        return state;
      if (state.previousOperand == null)
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.operation,
          currentOperand: null,
        };

      if (state.currentOperand == null)
        return {
          ...state,
          operation: payload.operation,
        };

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    }
    case ACTIONS.CLEAR: {
      return {};
    }
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return { ...state, currentOperand: null, overwrite: false };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (!state.currentOperand || !state.operation || !state.previousOperand) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
    default:
      return state;
  }
}
