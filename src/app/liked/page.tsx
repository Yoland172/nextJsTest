import LikedJobsContainer from "@/components/likedJobs/LikedJobsContainer";

const Liked = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-12">
      <h1 className="text-4xl font-bold mb-4">Liked Jobs</h1>
      <LikedJobsContainer />
    </div>
  );
};

export default Liked;
