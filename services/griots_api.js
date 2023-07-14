import axios from 'axios';

const yourExternalAPI = {
  login: async (credentials) => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', credentials);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
