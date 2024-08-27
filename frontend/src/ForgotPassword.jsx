import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/forgot-password`, { email });
      alert('Password reset link sent!');
    } catch (error) {
      alert("Failed to send reset link");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter your email"
        />
        <button onClick={handleForgotPassword} className="w-full p-2 bg-yellow-500 text-white rounded">
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
