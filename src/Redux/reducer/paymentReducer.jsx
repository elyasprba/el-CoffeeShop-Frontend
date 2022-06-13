import { PAYMENT_FULLFILLED, PAYMENT_PENDING, PAYMNET_REJECTED, RESET_PAYMENT } from '../actionCreator/string/actionSring';

const initial = {
   cartInfo: null,
   isLaoding: false,
   err: null,
   isSuccess: null,
};

const paymentReducer = (prevState = initial, action) => {
   switch (action.type) {
      case PAYMENT_PENDING:
         return { ...prevState, err: null, isLaoding: true };
      case PAYMENT_FULLFILLED:
         return { ...prevState, isLaoding: false, message: action.payload, isSuccess: true };
      case PAYMNET_REJECTED:
         return { ...prevState, err: action.payload, isLaoding: false, isSuccess: false };
      case RESET_PAYMENT:
         return { ...initial, isSuccess: false };
      default:
         return prevState;
   }
};

export default paymentReducer;
