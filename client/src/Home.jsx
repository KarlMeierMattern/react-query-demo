import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fresh-data"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3001");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (isError)
    return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-4">
      <div className="mb-4">
        <Link to="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Server Response</h2>
        <div className="space-y-2">
          <p className="font-semibold">Message:</p> {data.message}
          <p className="font-semibold">Duration:</p> {data.duration}
          <p className="font-semibold">Random Number:</p> {data.randomNumber}
        </div>
      </div>
    </div>
  );
}
