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
    <div className="hero-background w-full h-[30rem] lg:h-[40rem] flex justify-between items-center">
      <div className="hidden md:flex flex-col w-14 pt-56">
        <div className="h-full bg-blue-900 text-white px-5 hover:w-20 transition-all duration-1000 transform-cpu cursor-pointer hover:brightness-110 flex items-center justify-center">
          <FaFacebookF size={20} />
        </div>

        <div className="h-full bg-blue-500 text-white px-5 hover:w-20 transition-all duration-1000 transform-cpu cursor-pointer hover:brightness-110 flex items-center justify-center">
          <FaTwitter size={20} />
        </div>

        <div className="h-full bg-blue-700 text-white px-5 hover:w-20 transition-all duration-1000 transform-cpu cursor-pointer hover:brightness-110 flex items-center justify-center">
          <FaLinkedinIn size={20} />
        </div>

        <div className="h-full bg-red-500 text-white px-5  hover:w-20 transition-all duration-1000 transform-cpu cursor-pointer hover:brightness-110 flex items-center justify-center">
          <FaYoutube size={20} />
        </div>
      </div>

      <div className="flex flex-col w-full md:w-[40rem] h-96 px-5">
        <h1 className="text-3xl mb-5 md:text-4xl lg:text-5xl">
          Better Job. Better Talent
        </h1>
        <div className="flex mb-5">
          <p className="text-xl md:text-2xl lg:text-3xl mr-10">Jobs</p>
          <p className="text-xl md:text-2xl lg:text-3xl">Companies</p>
        </div>

        <div className="flex h-16 w-full">
          <div className="h-full bg-blue-800 text-white px-5 flex items-center justify-center">
            <AiOutlineSearch size={20} />
          </div>

          <input className="flex-1 outline-none pl-1 md:pl-6 text-lg" />
          <p className="text-lg md:text-2xl text-white bg-yellow-600 px-2 md:px-7 flex items-center justify-center">
            Search
          </p>
        </div>
      </div>
    </div>
  );
}
