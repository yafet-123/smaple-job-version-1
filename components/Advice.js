import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Advice() {
  return (
    <div className="bg-white w-full h-full lg:h-[40rem] p-20">
      <h1 className="text-center w-full uppercase text-[2.75rem] font-bold">
        carrer advice
      </h1>
      <p className="text-center text-2xl font-light my-5">
        Make the most out of your job search and cut your time as job seeker
        short.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/">
          <a className="flex flex-col items-center justify-center mb-5">
            <div className="border border-slate-300 rounded-xl p-5 mb-10">
              <Image src="/images/jobSearch.jpg" width={75} height={75} />
            </div>

            <h1 className="text-3xl text-blue-800 capitalize">
              job search tips
            </h1>
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-col items-center justify-center mb-5">
            <div className="border border-slate-300 rounded-xl p-5 mb-10">
              <Image src="/images/jobInterview.jpg" width={75} height={75} />
            </div>
            <h1 className="text-3xl text-blue-800 capitalize">
              job interview tips
            </h1>
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-col items-center justify-center mb-5">
            <div className="border border-slate-300 rounded-xl p-5 mb-10">
              <Image src="/images/cv.jpg" width={75} height={75} />
            </div>
            <h1 className="text-3xl text-blue-800 capitalize">cv tips</h1>
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-col items-center justify-center mb-5">
            <div className="border border-slate-300 rounded-xl p-5 mb-10">
              <Image src="/images/Careeradvice.jpg" width={75} height={75} />
            </div>
            <h1 className="text-3xl text-blue-800 capitalize">carrer Advice</h1>
          </a>
        </Link>
      </div>
    </div>
  );
}
