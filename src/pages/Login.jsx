import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-red-700 px-4">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center mb-6">
       Log in
        </h1>
       

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-400" />
              Remember me
            </label>
            <button
              type="button"
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 rounded-lg font-bold bg-yellow-400 text-red-900 hover:bg-yellow-300 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-200 mt-6">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-yellow-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
