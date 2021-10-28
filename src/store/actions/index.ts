import { FETCH_CART_DATA } from './types';

export function fetchCartData() {
  const cartData = [
      "Red Saree",
      "Blue Saree"
  ];
  return {
    type: FETCH_CART_DATA,
    payload: cartData
  };
}