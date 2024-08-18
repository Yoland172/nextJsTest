"use client";

import { JobItem as JobItemI } from "@/api/types";
import React from "react";
import JobItem from "../../ui/jobItem/JobItem";

interface LikedJobsProps {
  jobs: JobItemI[] | null;
  action: (id: string) => void;
}

const LikedJobs = ({ jobs, action }: LikedJobsProps) => {
  return (
    <section className="flex gap-5 flex-col">
      {jobs && jobs?.length > 0 ? (
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
              <button
                className="text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => {
                  action(el.job_id);
                }}
              >
                Remove from likeed
              </button>
            </JobItem>
          );
        })
      ) : (
        <p>your liked list is empty</p>
      )}
    </section>
  );
};

export default LikedJobs;
