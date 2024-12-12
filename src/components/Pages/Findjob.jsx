import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import JobCard from "../../Card/JobCard";
export default function Findjob() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["alljobs"],
    queryFn: () => axios.get(`https://career-compass-theta.vercel.app/jobs`),
  });
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error}</h1>;
  return (
    <>
      <section className=" text-white">
        <div className="flex flex-wrap gap-4">
          {data.data.map((item, i) => (
            <JobCard key={i} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}
