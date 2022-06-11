import { counterUpString, counterDownString } from '../actionCreator/actionSring';

const initial = {
   nilai: 0,
};

const counterReducer = (prevState = initial, action) => {
   switch (action.type) {
      case counterUpString:
         return { ...prevState, counter: prevState.counter + 1 };
      case counterDownString:
         return { ...prevState, counter: prevState.counter + 1 };
      default:
   }
};
