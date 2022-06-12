import { ADD_TO_CART } from './string/actionSring';

export const addToCart = (items) => (dispatch) => {
   console.log(items);
   dispatch({
      type: ADD_TO_CART,
      payload: items,
   });
};
