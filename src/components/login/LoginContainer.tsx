"use client";

import React from "react";
import Login from "./Login";
import { login } from "@/api/requests";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import { setUserDataToStorage } from "@/lib/helpers/authHelper";

const LoginContainer = () => {
  const router = useRouter();
  const { setUserDataState } = useAppContext();

  const handleLogin = async (email: string, password: string) => {
    try {
      const data = await login(email, password);
      setUserDataToStorage(data);
      setUserDataState?.(data);
      router.push("/jobs");
    } catch (e) {
      console.error("Invalid login");
    }
  };

  return <Login login={handleLogin} />;
};

export default LoginContainer;
