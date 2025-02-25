/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../redux/api/authApi';
import { setUser } from '../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer', // Default role
    phone: '',
    address: '',
    city: '',
  });

  const [register, { isLoading, isError, error }] = useRegisterMutation(); // Use the mutation hook

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Perform the register mutation call
      const response = await register(formData).unwrap();
  
      
      const user = response.data.user; 
      dispatch(setUser({ user }));
  
      // Redirect to home or dashboard after successful registration
      navigate('/'); // Navigate to the home or dashboard page
      // alert('User registered successfully');
    } catch (err: any) {
      console.error('Registration Error:', err?.data?.message || 'Something went wrong');
      alert('Error registering user');
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-24 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone (optional):</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address (optional):</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">City (optional):</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 ${isLoading ? 'bg-gray-500' : 'bg-primary'} text-white rounded-md hover:bg-blue-600`}
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
