import { PAYMENT_PENDING, PAYMENT_FULLFILLED, PAYMNET_REJECTED, RESET_PAYMENT } from './string/actionSring';
import axios from 'axios';

export const paymentAction = (body) => (dispatch, getState) => {
   dispatch({
      type: PAYMENT_PENDING,
   });

   const { token } = getState().auth.userInfo.info;

   axios
      .post(`${process.env.REACT_APP_HOST}/transactions/`, body, { headers: { Authorization: `Bearer ${token}` } })
      .then((result) => {
         dispatch({
            type: PAYMENT_FULLFILLED,
            payload: result.data.data.msg,
         });
      })
      .catch((error) => {
         dispatch({
            type: PAYMNET_REJECTED,
            payload: error.response.data.err.msg,
         });
      });
};

export const resetPayment = () => (dispatch) => {
   dispatch({ type: RESET_PAYMENT });
};
