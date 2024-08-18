import { RegistrationContainer } from "@/components/registration";
import Link from "next/link";

const CreateProfile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Registration
        </h2>

        <RegistrationContainer />

        <p className="text-center text-gray-600 text-sm mt-4">
          Do have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateProfile;
