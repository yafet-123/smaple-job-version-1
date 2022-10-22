import React from "react";
import { AiOutlineSearch, AiOutlineFacebook } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
export function Hero() {
  return (
    <div className="w-full h-[50rem] hero-background ">
      <div className="flex flex-col absolute top-1/2 bottom-1/2 w-full lg:w-[40rem] h-96 mx-20">
        <h1 className="text-5xl mb-5 ">Better Job. Better Talent</h1>
        <div className="flex mb-5">
          <p className="text-xl mr-10">Jobs</p>
          <p className="text-xl">Companies</p>
        </div>

        <div className="flex h-16">
          <div className="h-full bg-blue-800 text-white px-5 flex items-center justify-center">
            <AiOutlineSearch size={20} />
          </div>

          <input className="flex-1 outline-none pl-6 text-lg" />
          <p className="text-2xl text-white bg-yellow-600 px-7 flex items-center justify-center">
            Search
          </p>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 flex flex-col">
        <div className="h-full bg-blue-900 text-white px-5 flex items-center justify-center hover:w-96 mb-5">
          <FaFacebookF size={30} />
        </div>

        <div className="h-full bg-blue-500 text-white px-5 flex items-center justify-center">
          <FaTwitter size={30} />
        </div>

        <div className="h-full bg-blue-700 text-white px-5 flex items-center justify-center">
          <FaLinkedinIn size={30} />
        </div>

        <div className="h-full bg-red-500 text-white px-7 flex items-center justify-center">
          <FaYoutube size={30} />
        </div>
      </div>
    </div>
  );
}
