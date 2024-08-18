import { JobItem } from "@/api/types";

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

export const setLikedJobToStorage = (job: JobItem[]) => {
  localStorage.setItem("likedJobs", JSON.stringify(job));
};

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

export const deleteLikedJobFromStorage = (id: string) => {
  const likedJobs = localStorage.getItem("likedJobs");

  if (likedJobs) {
    const parsedArray: JobItem[] = JSON.parse(likedJobs);
    const updatedArray = parsedArray.filter((job) => job.job_id !== id);

    localStorage.setItem("likedJobs", JSON.stringify(updatedArray));
  }
};

export const deleteAllLikedJobsFromSotage = () => {
  localStorage.removeItem("likedJobs");
};
