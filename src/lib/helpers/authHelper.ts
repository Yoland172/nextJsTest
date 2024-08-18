import { UserData } from "@/api/types";

/**
 * Stores the user data object in local storage.
 * @param data A UserData object containing user-specific information.
 */
export const setUserDataToStorage = (data: UserData) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

/**
 * Retrieves the user data object from local storage.
 * @returns A UserData object if it exists in storage, or null if not found.
 */
export const getUserDataFromStorage = (): UserData | null => {
  const data = localStorage.getItem("userData");
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

/**
 * Removes the user data object from local storage.
 */
export const deleteUserDataFromSotage = () => {
  localStorage.removeItem("userData");
};
