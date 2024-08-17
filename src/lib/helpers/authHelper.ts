import { UserData } from "@/api/types";

export const setUserDataToStorage = (data: UserData) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

export const getUserDataFromStorage = (): UserData | null => {
  const data = localStorage.getItem("userData");
  if (data) {
    console.log(JSON.parse(data));
    return JSON.parse(data);
  }
  return null;
};
