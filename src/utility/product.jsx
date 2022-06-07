import axios from 'axios';

export async function getFavorite() {
   try {
      const URL = `http://localhost:8000/products/fav`;
      const results = await axios.get(URL);
      return results;
   } catch (error) {
      console.log(error);
   }
}
