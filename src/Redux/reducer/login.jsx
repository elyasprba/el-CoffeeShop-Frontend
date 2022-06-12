import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED, ADD_USER_INFO, DELETE_USER_INFO, RESET_LOGIN } from '../actionCreator/string/actionSring';

const initial = {
   userInfo: null,
   isLoading: false,
   err: null,
   isSuccess: null,
   isLoggedIn: false,
};

const loginReducer = (prevState = initial, action) => {
   switch (action.type) {
      case LOGIN_PENDING:
         return { ...prevState, err: null, isLoading: true };

      case LOGIN_FULFILLED:
         return { ...prevState, isLoading: false, message: action.payload, isSuccess: true, isLoggedIn: true };

      case LOGIN_REJECTED:
         return { ...prevState, err: action.payload, isLoading: false, isSuccess: false };

      case RESET_LOGIN:
         return { ...initial, isSuccess: false };

      default:
         return prevState;
   }
};

export const userTokenReducer = (state = { info: {} }, action) => {
   switch (action.type) {
      case ADD_USER_INFO:
         return { ...state, info: action.payload };
      case DELETE_USER_INFO:
         return { ...state, info: {} };
      default:
         return state;
   }
};

export default loginReducer;
