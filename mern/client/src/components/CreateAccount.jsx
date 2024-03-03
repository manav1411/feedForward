import React, { useState } from 'react';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the form data to your backend for account creation
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6">Create Your Food Provider Account</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        {/* Add your form fields */}
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Add more form fields (e.g., contactPerson, email, password, etc.) */}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
