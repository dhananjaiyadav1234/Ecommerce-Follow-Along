import React from 'react';

function Signup() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
        <div className="w-full max-w-xs p-6 bg-white rounded-xl shadow-lg">
          <form>
            <div className="text-xl font-bold text-gray-700 mb-3 text-center">
              Sign Up
            </div>

            <label htmlFor="name" className="text-sm">Name</label><br />
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-1 mt-1 text-gray-700 bg-gray-300 rounded-lg"
              required
            /><br />

            <label htmlFor="email" className="text-sm">Email</label><br />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-1 mt-1 text-gray-700 bg-gray-300 rounded-lg"
              required
            /><br />

            <label htmlFor="password" className="text-sm">Password</label><br />
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-1 mt-1 text-gray-700 bg-gray-300 rounded-lg"
              required
            /><br />

            <label htmlFor="confirmpassword" className="text-sm">Confirm Password</label><br />
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              className="w-full px-4 py-1 mt-1 text-gray-700 bg-gray-300 rounded-lg"
              required
            /><br />

            <label htmlFor="file" className="text-sm">Upload File</label><br />
            <input
              type="file"
              id="file"
              name="file"
              className="mt-4 text-gray-700 text-xs w-full file:border file:border-gray-600 file:rounded-lg file:font-medium"
              required
            /><br />




            

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-blue-700 text-white font-bold text-lg font-medium px-2 py-2 m-5 mt-1 w-full mx-0 rounded-lg"
            >
              Signup
            </button>

            <div className="flex justify-center mt-2">
              <span className="text-xs text-gray-700">Already have an account?</span>
              <button className="ml-1 text-xs text-blue-500">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;