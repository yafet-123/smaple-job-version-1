import React from "react";
import Image from "next/image";
import Link from "next/link";

export function News() {
  return (
    <div className="bg-white w-full h-full md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
      <div className="news-background w-full h-[30rem] md:h-full border rounded-xl"></div>
      <div className="flex flex-col px-10 md:px-0">
        <h1 className="text-center w-full uppercase text-7xl font-medium mt-10">
          job news
        </h1>
        <div className="flex flex-col md:flex-row w-full h-full md:h-72 mt-10">
          <img
            src="/images/bgImage1.avif"
            className="border rounded-xl w-full md:w-96"
          />
          <div className="flex flex-col justify-between ml-0 md:ml-10 mt-5 md:mt-0">
            <h1 className="text-left w-full uppercase text-3xl font-medium mb-5">
              Planning
            </h1>
            <p className="text-left capitalize text-lg font-normal leading-9 w-full md:w-3/4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor finibus ligula, in consectetur augue semper.
            </p>
            <button className="text-center capitalize text-lg font-bold p-5 bg-blue-700 hover:bg-gray-200 border rounded-xl w-1/2 text-white hover:text-blue-700">
              More
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full h-full md:h-72 mt-20">
          <img
            src="/images/bgImage1.avif"
            className="border rounded-xl w-full md:w-96"
          />
          <div className="flex flex-col justify-between ml-0 md:ml-10 mt-5 md:mt-0">
            <h1 className="text-left w-full uppercase text-3xl font-medium mb-5">
              Planning
            </h1>
            <p className="text-left capitalize text-lg font-normal leading-9 w-full md:w-3/4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor finibus ligula, in consectetur augue semper a.
            </p>
            <button className="text-center capitalize text-lg font-bold p-5 bg-blue-700 hover:bg-gray-200 border rounded-xl w-1/2 text-white hover:text-blue-700">
              More
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full h-full md:h-72 mt-20">
          <img
            src="/images/bgImage1.avif"
            className="border rounded-xl w-full md:w-96 h-full"
          />
          <div className="flex flex-col justify-between ml-0 md:ml-10 mt-5 md:mt-0">
            <h1 className="text-left w-full uppercase text-3xl font-medium mb-5">
              Planning
            </h1>
            <p className="text-left capitalize text-lg font-normal leading-9 w-full md:w-3/4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor finibus ligula, in consectetur augue semper a.
            </p>
            <button className="text-center capitalize text-lg font-bold p-5 bg-blue-700 hover:bg-gray-200 border rounded-xl w-1/2 text-white hover:text-blue-700">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
