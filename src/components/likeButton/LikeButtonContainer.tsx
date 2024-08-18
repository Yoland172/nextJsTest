//src/components/likeButton/LikedButtonsContainer.tsx
"use client";
import { JobItem } from "@/api/types";
import {
  addLikedJobToStorage,
  deleteLikedJobFromStorage,
  getLikedJobsFromStorage,
} from "@/lib/helpers/likeHelper";
import { useEffect, useState } from "react";
import LikeButton from "./likeButton";

interface LikeButtonContainerProps {
  jobInfo: JobItem;
}

const LikeButtonContainer = ({ jobInfo }: LikeButtonContainerProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const jobsFromStorage = getLikedJobsFromStorage() || [];
    const isLiked = jobsFromStorage.some((el) => el.job_id == jobInfo.job_id);
    if (isLiked) setIsLiked(true);
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
