'use client'

import { useState } from "react";

const ProfileNav = () => {
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
        Profile
      </button>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="absolute top-0.5 right-0 mt-10 bg-white shadow-lg rounded-md">
          <ul className="text-gray-800">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
              Option 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
              Option 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
              Option 3
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileNav;
