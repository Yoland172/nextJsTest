import axios from "axios";
import { ReqData, UserData } from "./types";
import { headers } from "next/headers";

const jobInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_TOKEN}`,
    "x-rapidapi-host": `${process.env.NEXT_PUBLIC_API_RAPIDAPI_HOST}`,
  },
});

const authInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_AUTH_API_URL}`,
});

//jobs

export const getJobsBySearch = async (query: string) => {
  const res = await jobInstance.get(`/search?query=${query}&page=1`);
  return res.data;
};

export const getJobById = async (id: string) => {
  const res = await jobInstance.get<ReqData>(`/job-details?job_id=${id}`);
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

export const changeUserField = async (
  fieldName: string,
  fieldQuery: string,
  token: string
) => {
  console.log({ [fieldName]: fieldQuery }, token);
  const res = await authInstance.patch(
    "/profile",
    {
      [fieldName]: fieldQuery, // Тіло запиту з динамічним полем
    },
    {
      headers: {
        Authorization: `Bearer ${token}`, // Токен передається в заголовках
      },
    }
  );

  return res.data;
};

export const getUserData = async (token: string) => {
  const res = await authInstance.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
