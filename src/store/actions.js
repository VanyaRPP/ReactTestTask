import { ADD_DATA, ADD_TO_CART, DEL_FROM_CART } from "./type";

export const getData = (data) => {
  return {
    type: ADD_DATA,
    pyload: data
  }
}

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    pyload: data
  }
}
export const delFromCart = (id) => {
  return {
    type: DEL_FROM_CART,
    pyload: id
  }
}