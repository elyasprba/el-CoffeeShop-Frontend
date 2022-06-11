import { counterUpString, counterDownString } from '../actionCreator/actionSring';

export const counterUp = () => {
   return {
      type: counterUpString,
   };
};

export const counterDown = () => {
   return {
      type: counterDownString,
   };
};
