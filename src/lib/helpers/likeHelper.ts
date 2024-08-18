import { JobItem } from "@/api/types";

/**
 * Retrieves an array of liked jobs from local storage.
 * @returns An array of JobItem objects representing liked jobs, or null if no jobs are stored.
 */
export const getLikedJobsFromStorage = (): JobItem[] | null => {
  if (typeof localStorage !== "undefined") {
    const likedJobs = localStorage.getItem("likedJobs");
    if (likedJobs) {
      return JSON.parse(likedJobs);
    }
    return null;
  }
  return null;
};

/**
 * Stores an array of liked jobs in local storage.
 * @param job An array of JobItem objects to be stored.
 */
export const setLikedJobToStorage = (job: JobItem[]) => {
  localStorage.setItem("likedJobs", JSON.stringify(job));
};

/**
 * Adds a single liked job to the existing array of jobs in local storage.
 * @param job A JobItem object to be added to storage.
 */
export const addLikedJobToStorage = (job: JobItem) => {
  const likedJobs = localStorage.getItem("likedJobs");
  if (likedJobs) {
    const parsedArray: JobItem[] = JSON.parse(likedJobs);
    parsedArray.push(job);
    localStorage.setItem("likedJobs", JSON.stringify(parsedArray));
  } else {
    const jobsArray = [job];
    localStorage.setItem("likedJobs", JSON.stringify(jobsArray));
  }
};

/**
 * Deletes a liked job from local storage based on its ID.
 * @param id The unique identifier of the job to be removed from liked jobs.
 */
export const deleteLikedJobFromStorage = (id: string) => {
  const likedJobs = localStorage.getItem("likedJobs");

  if (likedJobs) {
    const parsedArray: JobItem[] = JSON.parse(likedJobs);
    const updatedArray = parsedArray.filter((job) => job.job_id !== id);

    localStorage.setItem("likedJobs", JSON.stringify(updatedArray));
  }
};

/**
 * Clears all liked jobs from local storage.
 */
export const deleteAllLikedJobsFromSotage = () => {
  localStorage.removeItem("likedJobs");
};
