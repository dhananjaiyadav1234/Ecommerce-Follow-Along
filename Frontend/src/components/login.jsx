import React from 'react';

function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-screen bg-gray-300">
        <div className="w-full max-w-xs p-6 bg-white rounded-xl shadow-lg">
          <form>
            <div className="text-xl font-bold text-gray-700 mb-3 text-center">
              Login to your account
            </div>
            <label htmlFor="username" className="text-sm">Username:</label><br />
            <input
              type="text"
              className="w-full px-4 py-1 mt-1 text-gray-700 bg-gray-200 rounded-lg"
              id="username"
              name="username"
              required
            /><br />
            <label htmlFor="password" className="text-sm">Password:</label><br />
            <input
              type="password"
              className="w-full px-4 py-1 mt-1 text-gray-700 bg-gray-200 rounded-lg"
              id="password"
              name="password"
              required
            /><br />
            <div className="flex justify-end mt-4">
              <button className="text-xs text-gray-600 hover:text-blue-700">Forgot password?</button>
            </div>
            <button
              type="submit"
              className="m-6 mt-2 w-full mx-0 px-4 py-1 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
            <div className="flex justify-center">
              <span className="text-xs text-gray-700">Don't have an account? </span>
              <button className="ml-1 text-xs text-blue-500">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;