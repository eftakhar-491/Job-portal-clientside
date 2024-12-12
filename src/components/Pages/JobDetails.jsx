import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ApplyJobModal from "../Modal/ApplyJobModal";

export default function JobDetails() {
  const [applyModl, setApplyModal] = useState(false);
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["jobs", id],
    queryFn: () => axios.get(`http://localhost:5000/jobs/${id}`),
  });
  console.log(data);
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h1>error</h1>;
  }
  function handelapply(e) {
    e.preventDefault();
    setApplyModal(true);
  }
  return (
    <>
      {applyModl && (
        <ApplyJobModal applyModl={applyModl} setApplyModal={setApplyModal} />
      )}
      <section className="shadow-2xl rounded-lg text-white bg-slate-800/20 backdrop-blur-sm">
        <h1 className="text-2xl font-bold pl-4 pt-4 ">Job Details</h1>
        <p className=" pl-4 text-[12px] mb-4">
          Make sure your skils are matched either please don't apply !
        </p>
        <div className="p-4 ">
          <div className="flex items-center gap-2 mb-3">
            <img className="w-14 h-14" src={data.data.company_logo} alt="" />
            <div>
              <h1 className="text-lg font-bold">{data.data.company}</h1>
              <p className="text-sm font-medium">{data.data.location}</p>
            </div>
          </div>
          <p className="text-2xl font-bold">{data.data.title}</p>
          <h2 className="text-lg font-semibold mt-3">Description:</h2>
          <p className="text-sm mb-3">{data.data.description}</p>
          <h2 className="text-lg font-semibold">Requirements:</h2>
          <ul className="list-disc ml-4">
            {data.data.requirements.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <h2 className="text-lg font-semibold mt-3">Responsibilities:</h2>
          <ul className="list-disc pl-4">
            {data.data.responsibilities.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <p className="font-semibold mb-3 mt-3">
            Job Type: {data.data.jobType}
          </p>
          <h2 className="text-lg font-semibold mb-2">
            Salary Range: {data.data.salaryRange.min} -{" "}
            {data.data.salaryRange.max} {data.data.salaryRange.currency}{" "}
          </h2>
          <hr />
          <h3 className="mt-3">HR Name : {data.data.hr_name}</h3>
          <h4>HR Email : {data.data.hr_email}</h4>
          <h5>Last date of Application: {data.data.applicationDeadline}</h5>
          <button
            onClick={handelapply}
            className="px-4 py-1 border rounded mt-4"
          >
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
}
