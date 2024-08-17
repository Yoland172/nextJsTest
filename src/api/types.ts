interface JobRequiredEducation {
  associates_degree: boolean;
  bachelors_degree: boolean;
  degree_mentioned: boolean;
  degree_preferred: boolean;
  high_school: boolean;
}

interface JobRequiredExperience {
  experience_mentioned: boolean;
  experience_preferred: boolean;
  no_experience_required: boolean;
  equired_experience_in_months?: string;
}

interface Params {
  num_pages: number;
  page: number;
}

interface JobItem {
  job_id: string;
  job_title: string;
  employer_name: string;
  employer_logo: string;
  job_benefits: string[];
  job_city: string;
  job_country: string;
  job_description: string;
  job_employment_type: string;
  job_is_remote: boolean;
  job_offer_expiration_datetime_utc: Date;
  job_posted_at_datetime_utc: Date;
  job_required_education: JobRequiredEducation;
  job_required_experience: JobRequiredExperience;
  job_required_skills: string[];
}

export interface ReqData {
  data: JobItem[];
  parameters: Params;
}

//login

export interface UserData {
  token: string;
  name: string;
  email: string;
  desiredJobTitle?: string;
  aboutMe?: string;
}
