"use client";

import React from "react";
import Profile from "./ProfileNav";
import { useAppContext } from "@/context";

const ProfileNavContainer = () => {
  const { userDataState } = useAppContext();

  const userName = userDataState ? userDataState.name : null;

  return <Profile name={userName} />;
};

export default ProfileNavContainer;
