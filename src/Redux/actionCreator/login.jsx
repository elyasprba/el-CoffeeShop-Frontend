import { LOGIN_PENDING, LOGIN_REJECTED, LOGIN_FULFILLED, RESET_LOGIN, ADD_USER_INFO, DELETE_USER_INFO } from './string/actionSring';
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
            payload: result.data.data.msg,
         });
         dispatch({
            type: ADD_USER_INFO,
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

export const resetLogin = () => (dispatch) => {
   dispatch({ type: RESET_LOGIN });
};

export const logoutAction = () => (dispatch) => {
   dispatch({
      type: DELETE_USER_INFO,
   });
};
