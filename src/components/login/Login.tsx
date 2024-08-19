"use client";

import InputField from "@/ui/inputField/InputField";
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
      <InputField
        title="Email"
        registerReq={register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
          maxLength: 50,
        })}
        placeholder="Enter your email"
        type="text"
        error={errors.email}
      />

      <InputField
        title="Password"
        registerReq={register("password", {
          required: "Required",
        })}
        placeholder="Enter your password"
        type="password"
        error={errors.password}
      />

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
