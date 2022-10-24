import React from "react";
import Image from "next/image";

export function AdviceAndNews() {
  return (
    <div className="bg-white w-full h-[40rem] p-20">
      <h1 className="text-center w-full uppercase text-[2.75rem] font-bold">
        carrer advice & news
      </h1>

      <p className="text-center text-2xl font-light my-5">
        Make the most out of your job search and cut your time as job seeker
        short.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center justify-center">
          <Image src="/images/jobSearch.jpg" width={75} height={75} />
          <h1>job search tips</h1>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/jobInterview.jpg" width={75} height={75} />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/cv.jpg" width={75} height={75} />
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/Careeradvice.jpg" width={75} height={75} />
        </div>
      </div>
    </div>
  );
}
