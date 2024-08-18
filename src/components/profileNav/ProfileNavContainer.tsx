"use client";

import React from "react";
import Profile from "./ProfileNav";
import { useAppContext } from "@/context";

const ProfileNavContainer = () => {
  const { userDataState } = useAppContext();

  return <Profile name={userDataState?.name} />;
};

export default ProfileNavContainer;
