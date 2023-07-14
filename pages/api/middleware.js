import axios from 'axios';

const apiMiddleware = (handler) => async (req, res) => {
  const token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  return handler(req, res);
};

export default apiMiddleware;
