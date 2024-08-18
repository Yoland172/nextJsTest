"use client";
import { useState } from "react";
import Profile from "./Profile";
import { useAppContext } from "@/context";
import { changeUserField } from "@/api/requests";
import { setUserDataToStorage } from "@/lib/helpers/authHelper";

function ProfileContainer() {
  const { userDataState, setUserDataState } = useAppContext();
  const [error, setError] = useState<string | null>(null);
  const [loadingField, setLoadingField] = useState<string | null>(null);

  const handleChangeField = async (fieldName: string, fieldQuery: string) => {
    try {
      setLoadingField(fieldName);
      const userData = await changeUserField(
        fieldName,
        fieldQuery,
        userDataState!.token
      );

      const updatedUserData = { ...userData.user, token: userDataState!.token };

      setUserDataState?.(updatedUserData);
      setUserDataToStorage(updatedUserData);
      setError(null);
      setLoadingField(null);
    } catch (err) {
      setError(`Invalid field value: ${fieldQuery}`);
      setLoadingField(null);
    }
  };

  return (
    <Profile
      loadingField={loadingField}
      userInfo={userDataState}
      changeField={handleChangeField}
      error={error}
    />
  );
}

export default ProfileContainer;
