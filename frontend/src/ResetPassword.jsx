import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const { token } = useParams();  // Token from URL params
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/reset-password', { token, newPassword });
      alert('Password reset successfully!');
      navigate('/login');
    } catch (error) {
      alert("Failed to reset password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter new password"
        />
        <button onClick={handleResetPassword} className="w-full p-2 bg-red-500 text-white rounded">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
