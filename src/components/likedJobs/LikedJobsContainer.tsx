"use client";

import React, { useEffect, useState } from "react";
import LikedJobs from "./LikedJobs";
import {
  getLikedJobsFromStorage,
  setLikedJobToStorage,
} from "@/lib/helpers/likeHelper";
import { JobItem } from "@/api/types";

const LikedJobsContainer = () => {
  const [jobs, setJobs] = useState<JobItem[] | null>(null);

  const deleteFromLiked = async (id: string) => {
    if (jobs) {
      const jobIndex = jobs.findIndex((el) => el.job_id === id);
      if (jobIndex > -1) {
        const jobsCopy = structuredClone(jobs);
        jobsCopy.splice(jobIndex, 1);
        setJobs(jobsCopy);
        setLikedJobToStorage(jobsCopy);
      }
    }
  };

  useEffect(() => {
    setJobs(getLikedJobsFromStorage());
  }, []);

  return <LikedJobs jobs={jobs} action={deleteFromLiked} />;
};

export default LikedJobsContainer;
