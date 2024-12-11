import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
export default function Findjob() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["alljobs"],
    queryFn: () => axios.get(`http://localhost:5000/jobs`),
  });
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error}</h1>;
  return (
    <>
      <h1>Find jobs</h1>
    </>
  );
}
