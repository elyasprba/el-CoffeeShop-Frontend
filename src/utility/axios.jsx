import axios from 'axios';

export const Login = (body) => {
   return axios.post(`${process.env.REACT_APP_HOST}/auth/`, body);
};
