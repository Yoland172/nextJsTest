"use client";

import { deleteUserDataFromSotage } from "@/lib/helpers/authHelper";
import { deleteAllLikedJobsFromSotage } from "@/lib/helpers/likeHelper";
import Link from "next/link";

import { useState } from "react";

interface ProfileNavProps {
  name?: string;
}

const ProfileNav = ({ name }: ProfileNavProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((dropdownOpen) => !dropdownOpen);
  };

  const handlSignOut = () => {
    deleteAllLikedJobsFromSotage();
    deleteUserDataFromSotage();
    window.location.reload();
  };

  const renderProfileDropdown = () => {
    return (
      <>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
          <Link href={"/liked"}>Liked</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
          <button onClick={handlSignOut}>Sign out</button>
        </li>
      </>
    );
  };

  const renderAuthProfile = () => {
    return (
      <>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
          <Link href={"/login"}>Login</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
          <Link href={"/create-profile"}>Register</Link>
        </li>
      </>
    );
  };

  return (
    <>
      <button
        onClick={toggleDropdown}
        className="text-white focus:outline-none"
      >
        {name || "Profile"}
      </button>
      {dropdownOpen && (
        <div className="absolute top-0.5 right-0 mt-10 bg-white shadow-lg rounded-md">
          <ul className="text-gray-800">
            {name ? renderProfileDropdown() : renderAuthProfile()}
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileNav;
