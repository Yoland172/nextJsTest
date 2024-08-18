import JobSearchContainer from "@/components/jobsSearch/JobSearchContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-y-28">
      <JobSearchContainer />
    </main>
  );
}
