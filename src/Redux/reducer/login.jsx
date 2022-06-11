import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED, LOGOUT } from '../actionCreator/actionSring';

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
         return { ...prevState, isLoading: false, userInfo: action.payload, isSuccess: true, isLoggedIn: true };

      case LOGIN_REJECTED:
         return { ...prevState, err: action.payload, isLoading: false, isSuccess: false };

      case LOGOUT:
         return { ...initial };

      default:
         return prevState;
   }
};

export default loginReducer;
