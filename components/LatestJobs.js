import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LatestJobsList } from "../data/LatestJobs";
export function LatestJobs() {
  return (
    <section className="w-full h-[50rem] p-20 bg-white flex flex-col">
      <div className="flex justify-around items-center">
        <div className="flex items-center font-bold text-xl md:text-2xl lg:text-3xl text-black capitalize">
          <AiOutlineClockCircle size={30} />
          <span className="ml-5">Latest Jobs</span>
        </div>
        <Link href="">
          <a className="font-bold text-lg md:text-xl lg:text-2xl text-white p-4 bg-blue-700 capitalize border rounded-2xl">
            view all jobs
          </a>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-100 w-full h-[40rem] border rounded-lg mt-10 shadow-2xl shadow-sky-200 flex flex-col p-10 overflow-scroll">
        {LatestJobsList.map((data, index) => (
          <div className="flex justify-around items-center mb-5" key={index}>
            <div className="flex flex-col w-1/2">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-blue-700 ">
                {data.job}
              </h1>
              <h1 className="font-light text-xs md:text-sm lg:text-lg text-blue-700">
                {data.company}
              </h1>
            </div>
            <div className="flex flex-col w-1/2">
              <h1 className="font-light text-xs md:text-sm lg:text-lg text-black text-right">
                {data.createDate}
              </h1>
              <h1 className="font-light text-xs md:text-sm lg:text-lg text-black text-right">
                {data.location}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
