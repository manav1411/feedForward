import React, { useState, useEffect } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    password: '',
    email: '',
    userType: false,
    storeAddress: '',
    averageRating: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Business Name:
        <input type="text" name="businessName" onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        User Type:
        <input type="checkbox" name="userType" onChange={handleChange} />
      </label>
      <label>
        Store Address:
        <input type="text" name="storeAddress" onChange={handleChange} />
      </label>
      <label>
        Average Rating:
        <input type="number" name="averageRating" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SignUp;