"use client";

import { useForm } from "react-hook-form";

interface LoginInputs {
  email: string;
  password: string;
}

interface LoginProps {
  login: (email: string, password: string) => void;
}

const Login = ({ login }: LoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({});

  const onSubmit = (data: LoginInputs) => {
    login(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 h-24">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
            maxLength: 50,
          })}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6 h-24">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          {...register("password", {
            required: "Required",
            minLength: { value: 10, message: "too short" },
            maxLength: { value: 50, message: "too long" },
          })}
          type="password"
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
