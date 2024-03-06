import React, { useState } from 'react';

const UserForm = ({ isAdding, onSubmit, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    hobbies: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form validation logic here
    if (isAdding) {
      onSubmit(formData);
    } else {
      onUpdate(formData); // Replace with actual update logic
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 text-black shadow-md rounded px-4 py-5">
    <div className="mb-3">
      <label htmlFor="name" className="form-label block text-sm font-medium text-gray-700">
        Name
      </label>
      <input type="text" className="form-control block w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="name" name="name" value={formData.name} onChange={handleChange} required />
    </div>
    <div className="mb-3">
      <label htmlFor="phoneNumber" className="form-label block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input type="tel" className="form-control block w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label block text-sm font-medium text-gray-700">
        Email address
      </label>
      <input type="email" className="form-control block w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="email" name="email" value={formData.email} onChange={handleChange} required />
    </div>
    <div className="mb-3">
      <label htmlFor="hobbies" className="form-label text-black block text-sm font-medium text-gray-700">
        Hobbies (comma separated)
      </label>
      <textarea className="form-control block w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" id="hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange} />
    </div>
    <button type="submit" className="btn btn-primary float-right">
        {isAdding ? 'Save' : 'Update'}
    </button>
    </form>
  );
};

export default UserForm;

