import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Sign In
        </h2>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-shadow"
            required
          />
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="block text-gray-700 text-lg font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-shadow"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-gradient-to-r from-indigo-700 to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
