import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the App</h1>
      <div className="space-y-2">
        <p>
          <Link to="/home" className="text-blue-500 hover:underline">
            Go to Home
          </Link>
        </p>
        <p>
          <Link to="/about" className="text-blue-500 hover:underline">
            Go to About
          </Link>
        </p>
      </div>
    </div>
  );
}
