import { SHOW_LOADER } from "./type";

const initialState = {
  loading: false
}
export const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    
    default: return state
  }
}