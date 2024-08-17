import LoginContainer from "@/components/login/LoginContainer";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Login
        </h2>

        <LoginContainer />

        <p className="text-center text-gray-600 text-sm mt-4">
          Don`t have an account?{" "}
          <Link href="/registration" className="text-blue-500 hover:text-blue-700">
            Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
