import axios from "axios";
import { ReqData, UserData } from "./types";

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

/**
 * Fetches jobs based on a search query.
 * @param query The search term used to query the job listings.
 * @returns A promise that resolves with the job data matching the search query.
 */
export const getJobsBySearch = async (query: string) => {
  const res = await jobInstance.get<ReqData>(`/search?query=${query}&page=1`);
  return res.data;
};

/**
 * Retrieves the details of a specific job by its ID.
 * @param id The unique identifier of the job.
 * @returns A promise that resolves with the details of the specified job.
 */
export const getJobById = async (id: string) => {
  const res = await jobInstance.get<ReqData>(`/job-details?job_id=${id}`);
  return res.data;
};

/**
 * Authenticates a user and provides a session token.
 * @param email The user's email address.
 * @param password The user's password.
 * @returns A promise that resolves with user data including authentication details.
 */
export const login = async (email: string, password: string) => {
  const res = await authInstance.post<UserData>(`/auth/login`, {
    email,
    password,
  });

  return res.data;
};

/**
 * Creates a new user profile.
 * @param fullName The full name of the user.
 * @param email The email address of the user.
 * @param password The password for the user's account.
 * @returns A promise that resolves with the newly created user data.
 */
export const createProfile = async (
  fullName: string,
  email: string,
  password: string
) => {
  const res = await authInstance.post<UserData>("/auth", {
    name: fullName,
    email,
    password,
  });

  return res.data;
};

/**
 * Updates a specific field in the user profile.
 * @param fieldName The name of the field to update.
 * @param fieldQuery The new value for the specified field.
 * @param token The authentication token required for authorized access.
 * @returns A promise that resolves with the updated user data.
 */
export const changeUserField = async (
  fieldName: string,
  fieldQuery: string,
  token: string
) => {
  const res = await authInstance.patch(
    "/profile",
    {
      [fieldName]: fieldQuery,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

/**
 * Retrieves the profile data of the authenticated user.
 * @param token The authentication token of the user.
 * @returns A promise that resolves with the user's profile data.
 */
export const getUserData = async (token: string) => {
  const res = await authInstance.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
