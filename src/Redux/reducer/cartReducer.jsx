import { ADD_TO_CART, REMOVE_CART } from '../actionCreator/string/actionSring';

export const addToCartReducer = (state = { info: { product: {} } }, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         return { ...state, info: action.payload };
      case REMOVE_CART:
         return { ...state, info: { ...state.info, product: {} } };

      default:
         return state;
   }
};
