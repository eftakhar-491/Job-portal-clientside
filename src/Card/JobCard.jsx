import React from "react";
import { useNavigate } from "react-router-dom";

export default function JobCard({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="shadow-2xl border p-4 rounded-md flex-1 min-w-[300px] backdrop-blur-sm bg-slate-800/20 ">
        <div className="flex items-center gap-2">
          <img className="w-16 h-16" src={data?.company_logo} alt="" />
          <div>
            <h1 className="text-lg font-bold">{data?.company}</h1>
            <p className="text-sm font-medium">{data?.location}</p>
          </div>
        </div>
        <h1 className="text-xl font-semibold">Position</h1>
        <p className="text-sm">{data?.description}</p>
        <h2 className="text-xl mb-3">Requarement</h2>
        <div className="flex gap-2 flex-wrap">
          {data.requirements.map((item, i) => (
            <span
              className=" flex-shrink-0 text-sm border px-2 py-1 rounded-lg"
              key={i + "a"}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p>
            salary : {data?.salaryRange?.min}-{data?.salaryRange?.max}{" "}
            {data?.salaryRange?.currency}{" "}
          </p>
          <button
            onClick={() => navigate(`/job-details/${data?._id}`)}
            className="flex-shrink-0 border px-2 py-1 rounded-lg hover:bg-slate-500/20 active:scale-95"
          >
            See Details
          </button>
        </div>
      </div>
    </>
  );
}
