import React from "react";
import { LatestJobsList } from "../data/LatestJobs";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
export function SearchJobs() {
  return (
    <div className="flex flex-col w-full h-screen py-20 px-7 md:px-32">
      <h1 className="font-light text-2xl md:text-3xl lg:text-4xl capitalize mb-5 text-center md:text-left">
        Search and Find Jobs in Ethiopia
      </h1>
      <hr className="w-full bg-gray-200 mb-5" />
      <div className="flex w-full h-[55rem]">
        <div className="flex-1 px-5 border rounded-xl shadow-2xl shadow-sky-200 border-slate-300  p-3">
          <div className="w-full h-full overflow-y-scroll">
            <div className="grid md:grid-cols-3 gap-5 px-20 py-10">
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
          </div>
        </div>

        <ul className="mt-5">
          <a className="py-3 px-6 bg-gray-200 border border-slate-300 flex items-center hover:bg-white hover:text-blue-400">
            <BiCategory size={20} />
            <span className="text-xl ml-3">Jobs by Category</span>
          </a>
          <a className="py-3 px-6 bg-gray-200 border border-slate-300 flex items-center hover:bg-white hover:text-blue-400">
            <CiLocationOn size={20} />
            <span className="text-xl ml-3">Jobs by Location</span>
          </a>
        </ul>
      </div>
    </div>
  );
}
