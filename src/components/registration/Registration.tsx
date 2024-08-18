import { useAppContext } from "@/context";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface RegInputs {
  fulName: string;
  email: string;
  password: string;
}

interface RegistrationProps {
  createProfile: (name: string, email: string, password: string) => void;
}

const Registration = ({ createProfile }: RegistrationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegInputs>({});

  const onSubmit = (data: RegInputs) => {
    createProfile(data.fulName, data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 h-24">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Full Name:
        </label>
        <input
          {...register("fulName", {
            required: "Required",
            pattern: {
              value:
                /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+(?:\s+[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+)+$/,
              message: "Please enter a full name",
            },
            minLength: 3,
            maxLength: 50,
          })}
          type="text"
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          placeholder="Enter your full name"
        />
        {errors.fulName && (
          <p className="text-red-500 text-sm mt-1">{errors.fulName.message}</p>
        )}
      </div>

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
          })}
          type="password"
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          placeholder="Create a password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
      >
        Create an account
      </button>
    </form>
  );
};

export default Registration;
