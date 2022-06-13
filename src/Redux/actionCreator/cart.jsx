import { ADD_TO_CART, REMOVE_CART } from './string/actionSring';

export const addToCart = (items) => (dispatch) => {
   dispatch({
      type: ADD_TO_CART,
      payload: items,
   });
};

export const removeCart = () => (dispatch) => {
   dispatch({
      type: REMOVE_CART,
   });
};
