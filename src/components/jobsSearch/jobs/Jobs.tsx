"use client";

import { ReqData } from "@/api/types";
import React, { useEffect } from "react";
import JobItem from "./jobItem/JobItem";

interface JobsProp {
  jobs: ReqData | null;
  isLoading: boolean;
}

const Jobs = ({ jobs }: JobsProp) => {

  return (
    <section className="flex flex-col gap-[15px]">
      {jobs?.data &&
        jobs?.data.map((el) => {
          return (
            <JobItem
              key={el.job_id}
              id={el.job_id}
              title={el.job_title}
              img={el.employer_logo}
              employerName={el.employer_name}
              locationCity={el.job_city}
              locationCountry={el.job_country}
              description={el.job_description}
            />
          );
        })}
    </section>
  );
};

export default Jobs;
