"use client";
import { JobItem } from "@/api/types";
import LikeButton from "./LikeButton";
import {
  addLikedJobToStorage,
  deleteLikedJobFromStorage,
  getLikedJobsFromStorage,
} from "@/lib/helpers/likeHelper";
import { useEffect, useState } from "react";

interface LikeButtonContainerProps {
  jobInfo: JobItem;
}

const LikeButtonContainer = ({ jobInfo }: LikeButtonContainerProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const jobsFromStorage = getLikedJobsFromStorage();
    if (jobsFromStorage) {
      console.log(jobsFromStorage);
      const jobIndex = jobsFromStorage.findIndex(
        (el) => el.job_id == jobInfo.job_id
      );
      if (jobIndex > -1) {
        setIsLiked(true);
      }
    }
  }, []);

  const setLike = () => {
    setIsLiked(true);
    addLikedJobToStorage(jobInfo);
  };

  const deleteLike = () => {
    setIsLiked(false);
    deleteLikedJobFromStorage(jobInfo.job_id);
  };

  return (
    <LikeButton isLiked={isLiked} action={isLiked ? deleteLike : setLike} />
  );
};

export default LikeButtonContainer;
