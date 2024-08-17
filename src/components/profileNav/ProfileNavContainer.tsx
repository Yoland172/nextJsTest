"use client";

import React, { useEffect } from "react";
import Profile from "./ProfileNav";
import { useAppContext } from "@/context";

const ProfileNavContainer = () => {
  const { userDataState, setUserDataState } = useAppContext();

  // const { userDataState } = useAppContext();

  // useEffect(() => {
  //   console.log(userDataState);
  // },[userDataState])

  useEffect(() => {
    console.log(userDataState);
  }, [userDataState]);

  return <Profile />;
};

export default ProfileNavContainer;
