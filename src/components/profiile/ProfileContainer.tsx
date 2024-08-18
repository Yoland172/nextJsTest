"use client";
import { useEffect, useState } from "react";
import Profile from "./Profile";
import { useAppContext } from "@/context";
import { changeUserField } from "@/api/requests";
import {
  getUserDataFromStorage,
  setUserDataToStorage,
} from "@/lib/helpers/authHelper";

function ProfileContainer() {
  const { userDataState, setUserDataState } = useAppContext();
  const [error, setError] = useState<string | null>(null);
  const userDataFromStorage = getUserDataFromStorage();
  const handleChangeField = async (fieldName: string, fieldQuery: string) => {
    try {
      const userData = await changeUserField(
        fieldName,
        fieldQuery,
        userDataState.token
      );

      const updatedUserData = { ...userData.user, token: userDataState.token };
      setUserDataState && setUserDataState(updatedUserData);
      setUserDataToStorage(updatedUserData);
      setError(null);
    } catch (err: any) {
      setError("invalid field value ");
    }
  };

  return (
    <Profile
      userInfo={userDataState}
      changeField={handleChangeField}
      error={error}
    />
  );
}

export default ProfileContainer;
