/* eslint-disable @next/next/no-img-element */
"use client";
import { ReactNode } from "react";

interface JobItemProps {
  children: ReactNode;
  title: string;
  img: string;
  employerName: string;
  locationCity: string;
  locationCountry: string;
  description: string;
}

const JobItem = ({
  children,
  title,
  img,
  employerName,
  locationCity,
  locationCountry,
  description,
}: JobItemProps) => {
  return (
    <div className="w-full max-w-[1000px] h-fit h-60 border-solid border-2 border-blue-500 rounded-md p-8">
      <div className={"flex w-full gap-[20px]"}>
        <img src={img} alt="job-avatar" className="h-[56px] w-auto" />
        <div>
          <h2 className="text-[1.3em] font-medium">{title}</h2>
          <div className="flex gap-x-5">
            <p>{employerName}</p>
            {locationCity && <p>{locationCity}</p>}
            {locationCountry && <p>{locationCountry}</p>}
          </div>
        </div>
      </div>
        <h3 className="p-10">{description.length > 300 ? `${description.substring(0, 300)}...` : description}</h3>
      {children}
    </div>
  );
};

export default JobItem;
