import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <Link to="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">About Page</h2>
        <p>
          This is a demo application showcasing React Router and React Query
          integration.
        </p>
      </div>
    </div>
  );
}
