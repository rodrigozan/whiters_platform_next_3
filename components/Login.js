import React, { useState } from 'react';
import axios from 'axios';

import StyledComponent from '../components/StyledComponent';

const LoginForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/login', formData);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <StyledComponent>
      <div>
        <form method='POST'>
          <div className="row p-3">
            <div className="col-12">
              <label className="form-label">Username:</label>
              <input className="form-control" type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="col-12">
              <label className="form-label">Password:</label>
              <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="d-grid gap-2 mt-4">
              <button className="btn btn-success" type="submit" onClick={handleSubmit}>Login</button>
            </div>
          </div>
        </form>
      </div>
    </StyledComponent>
  );
};

export default LoginForm;
