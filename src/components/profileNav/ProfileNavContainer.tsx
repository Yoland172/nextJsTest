"use client";

import React, { useEffect } from "react";
import Profile from "./ProfileNav";
import { useAppContext } from "@/context";
import { getUserDataFromStorage } from "@/lib/helpers/authHelper";

const ProfileNavContainer = () => {
  const { userDataState } = useAppContext();

  useEffect(() => {
    console.log("USER DATA =>", userDataState);
  }, [userDataState]);

  const userName = userDataState ? userDataState.name : null;

  return <Profile name={userName} />;
};

export default ProfileNavContainer;
