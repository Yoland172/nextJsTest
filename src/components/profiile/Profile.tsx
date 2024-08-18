"use client";

import { UserData } from "@/api/types";
import UserPreference from "@/ui/userPreference/UserPreference";
import React from "react";

interface ProfileProps {
  userInfo: UserData | undefined;
  error: string | null;
  loadingField: string | null;
  changeField: (fieldName: string, fieldQuery: string) => void;
}

const Profile = ({ userInfo, changeField, loadingField, error }: ProfileProps) => {
  const preferences = [
    {
      title: "Name",
      filedKey: "name",
      data: userInfo?.name,
      type: "input",
    },
    {
      title: "Desired Job Title",
      filedKey: "desiredJobTitle",
      data: userInfo?.desiredJobTitle,
      type: "input",
    },
    {
      title: "About Me",
      filedKey: "aboutMe",
      data: userInfo?.aboutMe,
      type: "textarea",
    },
  ];

  return (
    <>
      <div className="mb-6 flex justify-between items-center border-b pb-4">
        <div>
          <label className="text-lg text-gray-700 font-semibold">Email:</label>
          <p className="text-xl text-gray-900 mt-2">{userInfo?.email}</p>
        </div>
      </div>

      {preferences.map((preference) => (
        <UserPreference
          key={preference.filedKey}
          title={preference.title}
          defaultValue={preference.data}
          isLoading={preference.filedKey === loadingField}
          type={preference.type as "input" | "textarea"}
          changeField={(fieldQuery: string) =>
            changeField(preference.filedKey, fieldQuery)
          }
        />
      ))}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </>
  );
};

export default Profile;
