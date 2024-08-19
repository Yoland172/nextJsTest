import { useAppContext } from "@/context";
import InputField from "@/ui/inputField/InputField";
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
      <InputField
        title="Full Name"
        registerReq={register("fulName", {
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
        placeholder = "Enter your full name"
        error={errors.fulName}
      />

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
           placeholder = "Enter your email"
        type="text"
        error={errors.email}
      />

      <InputField
        title="Password"
        registerReq={register("password", {
          required: "Required",
        })}
           placeholder = "Enter your password"
        type="password"
        error={errors.password}
      />

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
