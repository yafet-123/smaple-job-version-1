import React from "react";
import Image from "next/image";
import Link from "next/link";
export function Footer() {
  const socialMediaLinks = [
    { path: "/icons/icon-facebook.svg" },
    { path: "/icons/icon-youtube.svg" },
    { path: "/icons/icon-twitter.svg" },
    { path: "/icons/icon-instagram.svg" },
    { path: "/icons/icon-pinterest.svg" },
  ];

  const quickLinks = [
    { link: "Home" },
    { link: "About Us" },
    { link: "Projects" },
    { link: "Resources" },
  ];

  const aboutUsLinks = [
    { link: "History" },
    { link: "Mission/Vision" },
    { link: "Our Team" },
    { link: "Partners" },
  ];

  const projectLinks = [
    { link: "Project-1" },
    { link: "Project-2" },
    { link: "Project-3" },
    { link: "Project-4" },
  ];

  return (
    <footer className="bg-footerBackgroundColor">
      <div className="flex flex-col lg:flex-row justify-between p-10 bg-red-800">
        <div className="flex flex-col items-center justify-between space-y-5 md:items-start w-full md:w-1/4 mb-10 md:mb-0">
          <div className="">
            <Link href="/">
              <a>
                <Image
                  src="/icons/logo-white.svg"
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
                  <a>
                    <Image
                      src={paths.path}
                      alt=""
                      className="h-8 rounded-full"
                      width={25}
                      height={25}
                    />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 w-full lg:w-3/4">
          <div className="flex flex-col space-y-2 text-white">
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

          <div className="flex flex-col space-y-2 text-white">
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

          <div className="flex flex-col space-y-2 text-white">
            <h1 className="text-lg font-bold">Projects</h1>
            {projectLinks.map((links, index) => {
              return (
                <Link key={index} href="#">
                  <a className="text-copyrightTextColor hover:text-ecffSecondary">
                    {links.link}
                  </a>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col space-y-2 text-white">
            <h1 className="text-xl font-bold">Contact Info</h1>
            <p href="#" className="text-copyrightTextColor">
              Environment and Coffee forest forum,P.O.Box:28153,Addis Ababa,
              Ethiopia
            </p>
            <p className="text-copyrightTextColor hover:text-ecffSecondary">
              +251-116-733-707
            </p>
            <Link href="mailto:info@ecff.org.et">
              <a className="text-copyrightTextColor hover:text-ecffSecondary">
                info@ecff.org.et
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center footerBackgroundColorDark h-8 mx-10">
        <div className="text-copyrightTextColor md:block">&copy;ECFF 2022.</div>

        <div className="text-copyrightTextColor md:block">
          Powered by M.A.D Technologies
        </div>
      </div>
    </footer>
  );
}
