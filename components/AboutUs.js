import React from "react";
import Image from "next/image";
export function AboutUs() {
  return (
    <div className="bg-[#e0ded8] w-full h-full lg:h-screen flex flex-col md:flex-row justify-between items-center mt-5">
      <div className="w-full md:w-1/2 pt-20 md:pt-20 px-20">
        <h1 className="text-center w-full uppercase text-5xl xl:text-9xl font-medium mb-5">
          {" "}
          About Us
        </h1>
        <p className="text-center italic capitalize text-xl xl:text-2xl font-normal leding-[4rem] md:leading-[6rem] w-full mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          justo nulla. In blandit vulputate leo at vehicula. Nunc bibendum
          ligula eu sollicitudin scelerisque. Etiam dapibus felis ligula, non
          blandit ipsum sollicitudin a. Vestibulum ut ex nec erat tempus laoreet
          sed ac felis. Mauris tempor sit amet tortor vel consectetur. Cras
          ultricies lectus laoreet purus pellentesque, ac cursus nibh aliquam.
          Nulla venenatis vestibulum libero at bibendum. Nullam molestie elit
          ipsum, pulvinar laoreet odio eleifend nec.
        </p>
      </div>
      <div className="w-full md:w-1/2 relative pt-20 md:pt-0 px-0 md:px-20">
        <div className="w-96 md:w-[30rem] h-96 md:h-[30rem] border rounded-full bg-transparent lg:bg-amber-700 relative lg:float-right mx-auto md:mx-0">
          <div className="news-background w-96 md:w-[30rem] h-96 md:h-[30rem] border rounded-full absolute right-0 lg:right-40 top-0 lg:top-20"></div>
        </div>
      </div>
    </div>
  );
}
