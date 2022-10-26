import React from "react";
import { LatestJobsList } from "../data/LatestJobs";
export function SearchJobs() {
  return (
    <div className="flex flex-col w-full h-screen py-20 px-32">
      <h1 className="font-light text-2xl md:text-3xl lg:text-4xl capitalize mb-5">
        Search and Find Jobs in Ethiopia
      </h1>
      <hr className="w-full bg-gray-200 mb-5" />
      <div className="w-full h-[55rem] border rounded-xl border-slate-800 shadow-2xl shadow-sky-200 overflow-y-scroll">
        <div className="grid md:grid-cols-3 gap-5 px-20 py-10">
          {LatestJobsList.map((index, data) => (
            <div className="flex justify-between items-center mb-5">
              <h1 className="font-normal text-sm md:text-lg lg:text-xl capitalize">
                Accounting finance
              </h1>
              <h1 className="px-5 py-2 border rounded-xl border-gray-200 text-blue-800 font-bold text-sm md:text-lg lg:text-xl">
                89
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
