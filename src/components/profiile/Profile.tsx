"use client";

import { UserData } from "@/api/types";
import UserPreference from "@/ui/userPreference/UserPreference";
import React, { useState } from "react";

interface ProfileProps {
  userInfo: UserData | undefined;
  error: string | null;
  changeField: (fieldName: string, fieldQuery: string) => void;
}

const Profile = ({ userInfo, changeField, error }: ProfileProps) => {
  const [editingField, setEditingField] = useState<string>("");

  return (
    <>
      <UserPreference
        title={"Name"}
        defaultValue={userInfo?.name}
        type="input"
        changeField={(fieldQuery: string) => {
          changeField("name", fieldQuery);
        }}
      />
      <div className="mb-6 flex justify-between items-center border-b pb-4">
        <div>
          <label className="text-lg text-gray-700 font-semibold">Email:</label>
          <p className="text-xl text-gray-900 mt-2">{userInfo?.email}</p>
        </div>
      </div>

      <UserPreference
        title={"Desired Job Title"}
        defaultValue={userInfo?.desiredJobTitle}
        type="input"
        changeField={(fieldQuery: string) => {
          changeField("desiredJobTitle", fieldQuery);
        }}
      />

      <UserPreference
        title="About Me"
        defaultValue={userInfo?.aboutMe}
        type="textarea"
        changeField={(fieldQuery: string) => {
          changeField("aboutMe", fieldQuery);
        }}
      />
      {error && <p className="text-red-500 text-center">{error}</p>}
    </>
  );
};

export default Profile;
