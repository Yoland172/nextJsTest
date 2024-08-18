import { getJobById } from "@/api/requests";
import LikeButtonContainer from "@/ui/likeButton/LikeButtonContainer";
import Image from "next/image";
import React from "react";

const JobDetails = async ({ params }: any) => {
  const res = await getJobById(params.id);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-gray-200 mx-auto w-4/5 mt-20 m-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-blue-600">
          {res.data[0].job_title}
        </h2>
        {res.data[0].employer_logo && (
          <Image
            width={80}
            height={80}
            src={res.data[0].employer_logo}
            alt="Employer Logo"
            className="w-16 h-16 rounded-full border border-blue-200"
          />
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{res.data[0].employer_name}</h3>
        <p className="text-sm text-gray-600">
          {res.data[0].job_city}, {res.data[0].job_country}
        </p>
      </div>
      <p className="text-gray-700">{res.data[0].job_description}</p>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
          {res.data[0].job_employment_type}
        </span>
        {res.data[0].job_is_remote && (
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
            Remote
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {res.data[0].job_benefits && (
            <h4 className="font-semibold">Benefits:</h4>
          )}

          <ul className="list-disc pl-5 space-y-1">
            {res.data[0].job_benefits &&
              res.data[0].job_benefits.map((benefit, index) => (
                <li key={index} className="text-gray-800">
                  {benefit}
                </li>
              ))}
          </ul>
        </div>
        <div>
          {res.data[0].job_required_skills && (
            <h4 className="font-semibold">Skills Required:</h4>
          )}

          <ul className="list-disc pl-5 space-y-1">
            {res.data[0].job_required_skills &&
              res.data[0].job_required_skills.map((skill, index) => (
                <li key={index} className="text-gray-800">
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="text-sm">
        <p>
          Posted:{" "}
          {new Date(
            res.data[0].job_posted_at_datetime_utc
          ).toLocaleDateString()}
        </p>
        <p>
          Expires:{" "}
          {new Date(
            res.data[0].job_offer_expiration_datetime_utc
          ).toLocaleDateString()}
        </p>
      </div>
      <LikeButtonContainer jobInfo={res.data[0]} />
    </div>
  );
};

export default JobDetails;
