"use client";

import React, { useEffect } from "react";
import Login from "./Login";
import { login } from "@/api/requests";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import { setUserDataToStorage } from "@/lib/helpers/authHelper";
import { UserData } from "@/api/types";

const LoginContainer = () => {
  const router = useRouter();
  const { userDataState, setUserDataState } = useAppContext();

  const handleLogin = async (email: string, password: string) => {
    try {
      const data = await login(email, password);
      const userDataObject: UserData = {
        token: data.token,
        email: data.email,
        name: data.name,
        desiredJobTitle: data.desiredJobTitle,
        aboutMe: data.aboutMe,
      };
      setUserDataToStorage(userDataObject);
      setUserDataState(userDataObject);
      router.push("/");
    } catch (e) {
      console.log("invalid login");
    }
  };

  return <Login login={handleLogin} />;
};

export default LoginContainer;
