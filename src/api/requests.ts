import axios from "axios";
import { ReqData, UserData } from "./types";

const jogInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
    "x-rapidapi-host": `${process.env.NEXT_PUBLIC_API_RAPIDAPI_HOST}`,
  },
});

const authInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_AUTH_API_URL}`,
});

export const getJobsBySearch = async (query: string) => {
  const res = await jogInstance.get(`/search?query=${query}&page=1`);
  return res.data;
};

//auth
export const login = async (email: string, password: string) => {
  const res = await authInstance.post<UserData>(`/auth/login`, {
    email,
    password,
  });

  return res.data;
};

export const createProfile = async (
  fullName: string,
  email: string,
  password: string
) => {
  console.log(fullName, email, password);
  const res = await authInstance.post<UserData>("/auth", {
    name: fullName,
    email,
    password,
  });

  return res.data;
};

export const getUserData = async (token: string) => {
  const res = await authInstance.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
