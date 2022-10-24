import React from "react";
import Image from "next/image";
import Link from "next/link";

export function News() {
  return (
    <div className="bg-white w-full h-screen p-20 grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
      <div className="news-background w-full h-screen"></div>
      <div className="flex flex-col">
        <h1 className="text-center w-full uppercase text-7xl font-medium my-10">
          job news
        </h1>
        <div className="flex">
          <Image
            src="/images/bgImage1.avif"
            width="1000px"
            height="1000px"
            className="border rounded-xl"
          />
          <div className="flex flex-col justify-between ml-10">
            <h1 className="text-left w-full uppercase text-3xl font-medium">
              Planning
            </h1>
            <p className="text-left w-full capitalize text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor finibus ligula, in consectetur augue semper a. Vivamus ut
              ante sagittis, pellentesque quam sed, interdum lacus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Aenean hendrerit nulla augue, non rhoncus nisi
              imperdiet quis.
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
