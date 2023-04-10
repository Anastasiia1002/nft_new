
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';



export async function getNews() {
  
    try {
      const config = {
        url: `photos`,
        params: {},
      };
      const { data } = await axios(config);
      return data;
    } catch (error) {
      console.log('error');
      return null;
    }
  }