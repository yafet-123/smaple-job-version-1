import React from "react";
import { LatestJobsList } from "../data/LatestJobs";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { useState } from "react";
import { JobsByLocation } from "../data/JobsByLocation";
export default function SearchJobs() {
  const [jobs, setJobs] = useState("category");
  console.log(jobs);
  return (
    <section className="flex flex-col w-full h-full py-20 px-7 md:px-32 bg-gray-200">
      <h1 className="font-light text-2xl md:text-3xl lg:text-4xl capitalize mb-5 text-center md:text-left">
        Search and Find Jobs in Ethiopia
      </h1>
      <hr className="w-full bg-gray-200 mb-5" />
      <div className="flex w-full h-full lg:h-[45rem] bg-white p-3 border rounded-xl">
        <ul className="mt-5">
          <li
            onClick={(e) => setJobs("category")}
            className={
              jobs == "category"
                ? "py-3 bg-white px-6 border border-slate-300 flex items-center hover:text-blue-400 border-x-white pr-10"
                : "py-3 bg-gray-200 px-6 border border-slate-300 flex items-center hover:bg-white hover:text-blue-400"
            }
          >
            <BiCategory size={20} />
            <span className="hidden lg:inline-flex text-xl ml-3">
              Jobs by Category
            </span>
          </li>
          <li
            onClick={(e) => setJobs("location")}
            className={
              jobs == "location"
                ? "py-3 bg-white px-6 border border-slate-300 flex items-center hover:text-blue-400 border-x-transparent z-10 -mr-[0.025]"
                : "py-3 bg-gray-200 px-6 border border-slate-300 flex items-center hover:bg-white hover:text-blue-400"
            }
          >
            <GoLocation size={20} />
            <span className="hidden lg:inline-flex text-xl ml-3">
              Jobs by Location
            </span>
          </li>
        </ul>
        <div className="flex-1 px-5 border rounded-xl shadow-2xl shadow-sky-200 border-slate-300  p-3">
          <div className="w-full h-full overflow-y-scroll">
            {jobs == "category" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-20 py-10">
                {LatestJobsList.map((data, index) => (
                  <div
                    className="flex justify-between items-center mb-3 group hover:bg-gray-200 px-4 py-2"
                    key={index}
                  >
                    <h1 className="font-normal text-sm md:text-lg lg:text-xl capitalize group-hover:text-orange-500">
                      Accounting finance
                    </h1>
                    <h1 className="px-5 py-2 border rounded-xl border-gray-200 text-blue-800 font-bold text-sm md:text-lg lg:text-xl group-hover:text-orange-500 group-hover:border-orange-200">
                      89
                    </h1>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-20 py-10">
                {JobsByLocation.map((data, index) => (
                  <div
                    className="flex justify-between items-center mb-3 group hover:bg-gray-200 px-4 py-2"
                    key={index}
                  >
                    <h1 className="font-normal text-sm md:text-lg lg:text-xl capitalize group-hover:text-orange-500">
                      jobs in {data.location}
                    </h1>
                    <h1 className="px-5 py-2 border rounded-xl border-gray-200 text-blue-800 font-bold text-sm md:text-lg lg:text-xl group-hover:text-orange-500 group-hover:border-orange-200">
                      {data.howmany}
                    </h1>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}