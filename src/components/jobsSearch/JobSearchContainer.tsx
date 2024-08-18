"use client";

import React, { useEffect, useState } from "react";
import Search from "./search/Search";
import { getJobsBySearch } from "@/api/requests";
import { JobItem, ReqData } from "@/api/types";
import Jobs from "./jobs/Jobs";
import { useAppContext } from "@/context";
import NoRecomendations from "./NoRecomendations";
import useSWR from "swr";

const JobSearchContainer = () => {
  const { userDataState } = useAppContext();

  const [jobs, setJobs] = useState<JobItem[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const query = userDataState?.desiredJobTitle || null;

  const { data } = useSWR(
    query ? `/search?query=${query}` : null,
    () => getJobsBySearch(query),
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (data) {
      setJobs(data.data);
    }
  }, [data]);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    const res = await getJobsBySearch(query);
    setIsLoading(false);
    setJobs(res.data);
  };

  return (
    <>
      <Search search={handleSearch} />
      {userDataState?.desiredJobTitle || jobs ? (
        <Jobs jobs={jobs} isLoading={isLoading} />
      ) : (
        <NoRecomendations isUserLogged={!!userDataState}/>
      )}
    </>
  );
};

export default JobSearchContainer;
