"use client";

import { JobItem as JobItemI } from "@/api/types";
import React from "react";
import JobItem from "../../../ui/jobItem/JobItem";
import Link from "next/link";
import Spinner from "@/ui/spinners/Spinner";

interface JobsProp {
  jobs: JobItemI[] | null;
  isLoading: boolean;
}

const Jobs = ({ jobs, isLoading }: JobsProp) => {
  {
    if (isLoading) return <Spinner />;
  }

  return (
    <section className="flex flex-col gap-[15px]">
      {jobs &&
        jobs.map((el) => {
          return (
            <JobItem
              key={el.job_id}
              title={el.job_title}
              img={el.employer_logo}
              employerName={el.employer_name}
              locationCity={el.job_city}
              locationCountry={el.job_country}
              description={el.job_description}
            >
              <Link
                href={`/job-details/${el.job_id}`}
                className="text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Read More
              </Link>
            </JobItem>
          );
        })}
    </section>
  );
};

export default Jobs;
