import React from "react";
import { LatestJobsList } from "../data/LatestJobs";
export function SearchJobs() {
  return (
    <div className="flex flex-col w-full h-screen py-20 px-32">
      <h1 className="font-light text-2xl md:text-3xl lg:text-4xl capitalize mb-5">
        Search and Find Jobs in Ethiopia
      </h1>
      <hr className="w-full bg-gray-200 mb-5" />
      <div className="w-full h-[55rem] border rounded-xl border-slate-800 shadow-2xl shadow-sky-200">
        {LatestJobsList.map((index, data) => (
          <div className="grid grid-cols-3 gap-5 px-20 py-5">
            <h1>Accounting finance</h1>
            <h1>89</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
