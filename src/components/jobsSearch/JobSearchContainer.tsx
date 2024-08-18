"use client";

import React, { useEffect, useState } from "react";
import Search from "./search/Search";
import { getJobsBySearch } from "@/api/requests";
import { ReqData } from "@/api/types";
import Jobs from "./jobs/Jobs";
import { useAppContext } from "@/context";
import NoRecomendations from "./NoRecomendations";

const JobSearchContainer = () => {
  const { userDataState } = useAppContext();

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    const res = await getJobsBySearch(query);
    setIsLoading(false);
    setJobs(res);
  };

  const setJobsByRecomend = async () => {
    console.log("log2");
    if (userDataState) {
      console.log("log1");
      const res = await getJobsBySearch(
        userDataState.desiredJobTitle ? userDataState.desiredJobTitle : ""
      );

      setJobs(res);
    }
  };
  useEffect(() => {
    if (userDataState?.desiredJobTitle) setJobsByRecomend();
  }, [userDataState]);

  const [jobs, setJobs] = useState<ReqData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Search search={handleSearch} />
      {userDataState?.desiredJobTitle || jobs ? (
        <Jobs jobs={jobs} isLoading={isLoading} />
      ) : (
        <NoRecomendations />
      )}
    </>
  );
};

export default JobSearchContainer;
