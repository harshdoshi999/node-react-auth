import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, { email, password });
      navigate('/login');
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Password"
        />
        <button onClick={handleSignup} className="w-full p-2 bg-green-500 text-white rounded">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
