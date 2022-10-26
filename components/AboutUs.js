import React from "react";
import Image from "next/image";
export function AboutUs() {
  return (
    <div className="bg-[#e0ded8] w-full h-screen flex justify-between items-center px-20">
      <div className="w-full md:w-1/2">
        <h1 className="text-center w-full uppercase text-5xl font-medium mb-5">
          {" "}
          About Us
        </h1>
        <p className="text-center capitalize text-xl font-normal leading-9 w-full mb-5">
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
      <div className="w-full md:w-1/2">
        <div className="w-96 h-96 border rounded-full bg-amber-700 relative float-right">
          <Image
            src="/images/bgImage3.avif"
            width={384}
            height={384}
            className="border rounded-full absolute top-10 left-10"
          />
        </div>
      </div>
    </div>
  );
}
