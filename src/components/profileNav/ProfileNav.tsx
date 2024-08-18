import Link from "next/link";
import { useState } from "react";

interface ProfileNavProps {
  name: string | null;
}

const ProfileNav = ({ name }: ProfileNavProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <button
        onClick={toggleDropdown}
        className="text-white focus:outline-none"
      >
        {name ? name : "Profile"}
      </button>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="absolute top-0.5 right-0 mt-10 bg-white shadow-lg rounded-md">
          <ul className="text-gray-800">
            {name ? (
              <>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                  <Link href={"/profile"}>Profile</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                  Sign out
                </li>
              </>
            ) : (
              <>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                  <Link href={"/login"}>Login</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
                  <Link href={"/create-profile"}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileNav;
