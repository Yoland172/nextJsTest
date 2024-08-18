import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  title: string;
  registerReq: UseFormRegisterReturn;
  type: string;
  error?: FieldError;
}

const InputField = ({ title, registerReq, error, type }: InputFieldProps) => {
  return (
    <div className="mb-4 h-24">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}:
      </label>
      <input
        {...registerReq}
        type={type}
        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
        placeholder="Enter your full name"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
