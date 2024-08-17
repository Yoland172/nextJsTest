/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

interface JobItemProps {
  id: string;
  title: string;
  img: string;
  employerName: string;
  locationCity: string;
  locationCountry: string;
  description: string;
}

const JobItem = ({
  title,
  img,
  employerName,
  locationCity,
  locationCountry,
  description,
  id,
}: JobItemProps) => {
  return (
    <div className="w-full max-w-[1000px] h-fit h-60 border-solid border-2 border-sky-500 rounded-md p-8">
      <div className={"flex w-full gap-[20px]"}>
        <img src={img} alt="job-avatar" className="w-[56px] h-auto" />
        <div>
          <h2 className="text-[1.3em] font-medium">{title}</h2>
          <div className="flex gap-x-5">
            <p>{employerName}</p>
            {locationCity && <p>{locationCity}</p>}
            {locationCountry && <p>{locationCountry}</p>}
          </div>
        </div>
      </div>
      {description.length > 300 ? (
        <h3 className="p-10">{`${description.substring(0, 300)}...`}</h3>
      ) : (
        <h3 className="p-10">{description}</h3>
      )}

      <Link
        href={`/job-details/${id}`}
        className="text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Details...
      </Link>
    </div>
  );
};

export default JobItem;
