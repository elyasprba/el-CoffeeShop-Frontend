import axios from 'axios';

const getFavorite = () => {
   axios
      .get('localhost:8080/products/fav')
      .then((result) => {
         console.log(result);
      })
      .catch((error) => {
         console.log(error);
      });
};

export default {
   getFavorite,
};
