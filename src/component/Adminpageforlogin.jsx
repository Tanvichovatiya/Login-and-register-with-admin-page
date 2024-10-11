import React from 'react';

const AdminPageLogin = ({ loginAttempts }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Login Attempts</h2>
      {loginAttempts.length === 0 ? (
        <p className="text-center">No login attempts yet</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Password (hashed)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loginAttempts.map((attempt, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{attempt.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">*******</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPageLogin;
