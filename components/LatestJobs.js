import Link from "next/link";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export function LatestJobs() {
  return (
    <section className="w-full h-[50rem] p-20 bg-white flex flex-col">
      <div className="flex justify-between items-center">
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

      <div className="mx-auto"></div>
    </section>
  );
}
