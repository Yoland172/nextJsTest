"use client";

import { createProfile } from "@/api/requests";
import Registaration from "./Registration";

import React, { use, useEffect } from "react";
import { UserData } from "@/api/types";
import { useRouter } from "next/navigation";
import { setUserDataToStorage } from "@/lib/helpers/authHelper";
import { useAppContext } from "@/context";

const RegistrationContainer = () => {
  const router = useRouter();
  const { setUserDataState } = useAppContext();
  const handleCreateProfile = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const data = await createProfile(name, email, password);
      setUserDataToStorage(data);
      setUserDataState && setUserDataState(data);
      router.push("/");
    } catch (e) {
      console.log("invalid data");
    }
  };
  return <Registaration createProfile={handleCreateProfile} />;
};

export default RegistrationContainer;
