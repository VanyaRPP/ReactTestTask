import { ADD_DATA, ADD_TO_CART, DEL_FROM_CART } from "./type";

const initialState = {
  data: [],
  cart: []
}
export const dataReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: action.pyload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.pyload] };
    case DEL_FROM_CART:
      return { ...state, cart: state.cart.filter((f) => f.id !== action.pyload) }
    default: return state
  }
}