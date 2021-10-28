import { FETCH_CART_DATA } from "../actions/types";

const INITIAL_STATE: never[] = [];

export default function (state = INITIAL_STATE, action: { type: any; payload: any; }) {
  switch (action.type) {
    case FETCH_CART_DATA:
      return action.payload;
    default:
      return state;
  }
}
