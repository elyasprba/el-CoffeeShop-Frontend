import { LOGIN_PENDING, LOGOUT, LOGIN_REJECTED, LOGIN_FULFILLED } from './actionSring';
import axios from 'axios';

export const loginAction = (body) => (dispatch) => {
   dispatch({
      type: LOGIN_PENDING,
   });

   axios
      .post(`${process.env.REACT_APP_HOST}/auth/`, body)
      .then((result) => {
         dispatch({
            type: LOGIN_FULFILLED,
            payload: result.data.data,
         });
      })
      .catch((error) => {
         dispatch({
            type: LOGIN_REJECTED,
            payload: error.response.data.err.msg,
         });
      });
};

export const logoutAction = () => ({
   type: LOGOUT,
});
