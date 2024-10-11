import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ addLoginAttempt }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();

  const validate = () => {
    let tempErrors = {};
    
    // Username validation
    if (!formData.username.trim()) tempErrors.username = "Username is required";
    
    // Password validation
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 8) tempErrors.password = "Password must be at least 8 characters";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addLoginAttempt(formData); // Add login attempt to the admin table
      setFormData({ username: '', password: '' }); // Clear form
    }
  };

  return (
<>
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
    <h1 className='text-center text-[20px] font-semibold' onClick={()=>navigate('/adminlogin')}>Admin for Login</h1>
    </>
  );
};

export default LoginForm;
