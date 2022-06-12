import { ADD_TO_CART } from '../actionCreator/string/actionSring';

export const addToCartReducer = (state = { info: {} }, action) => {
   if (action.type === ADD_TO_CART) {
      return { ...state, info: action.payload };
   }
   return state;
};
