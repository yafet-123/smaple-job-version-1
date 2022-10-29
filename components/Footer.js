import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export function Footer() {
  const socialMediaLinks = [
    { path: <FaFacebookF size={20} /> },
    { path: <FaLinkedinIn size={20} /> },
    { path: <FaTwitter size={20} /> },
    { path: <FaYoutube size={20} /> },
  ];

  const quickLinks = [
    { link: "Home" },
    { link: "Course" },
    { link: "Resources" },
  ];

  const aboutUsLinks = [
    { link: "History" },
    { link: "Mission/Vision" },
    { link: "Our Team" },
  ];

  return (
    <footer className="bg-gray-300">
      <div className="flex flex-col lg:flex-row justify-between p-10 bg-white">
        <div className="flex flex-col items-center justify-between space-y-5 md:items-start w-full md:w-1/4 mb-10 md:mb-0">
          <div className="">
            <Link href="/">
              <a>
                <Image
                  src="/images/vercel.svg"
                  className=""
                  alt=""
                  width={100}
                  height={35}
                />
              </a>
            </Link>
          </div>

          <p className="text-copyrightTextColor w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elitadipisicing
            elit.
          </p>
          <div className="flex justify-center space-x-4">
            {socialMediaLinks.map((paths, index) => {
              return (
                <Link key={index} href="#">
                  <a>{paths.path}</a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 w-full lg:w-3/4">
          <div className="flex flex-col space-y-2 text-black">
            <h1 className="text-lg font-bold">Quick Links</h1>
            {quickLinks.map((links, index) => {
              return (
                <Link key={index} href="#">
                  <a className="text-copyrightTextColor hover:text-ecffSecondary">
                    {links.link}
                  </a>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col space-y-2 text-black">
            <h1 className="text-lg font-bold">About Us</h1>
            {aboutUsLinks.map((links, index) => {
              return (
                <Link key={index} href="#">
                  <a className=" text-copyrightTextColor hover:text-ecffSecondary">
                    {links.link}
                  </a>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col space-y-2 text-black float-right">
            <h1 className="text-xl font-bold">Contact Info</h1>
            <p href="#" className="text-copyrightTextColor">
              Jobs finder
            </p>
            <p className="text-copyrightTextColor hover:text-ecffSecondary">
              +251-934-73-10-38
            </p>
            <p className="text-copyrightTextColor hover:text-ecffSecondary">
              +251-934-73-10-38
            </p>
            <Link href="mailto:info@ecff.org.et">
              <a className="text-copyrightTextColor hover:text-ecffSecondary">
                yafetaddisu123@gmail.com
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center footerBackgroundColorDark h-8 mx-10">
        <div className="text-copyrightTextColor md:block">&copy;Hulu 2022.</div>

        <div className="text-copyrightTextColor md:block">
          Powered by Hulu Media
        </div>
      </div>
    </footer>
  );
}
