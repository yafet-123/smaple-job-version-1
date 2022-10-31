import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [NavabarText, setNavabarText] = useState("Home");
  const MainList = [
    {
      path: "",
      icon: <FaFacebookF />,
    },
    { path: "", icon: <FaTwitter /> },
    { path: "", icon: <FaLinkedinIn /> },
    { path: "", icon: <FaYoutube /> },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // when it will scrolldown greater than 90 it will have navbar will change it style
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const NavbarTopic = [
    { path: "/", text: "Home" },
    { path: "/Jobs", text: "Jobs" },
    { path: "/Courses", text: "Courses" },
    { path: "/Advices", text: "Advices" },
  ];

  return (
    <div className="bg-white w-full h-32 ">
      <div className="flex flex-row justify-between items-center px-11 md:px-20">
        <Image src="/images/vercel.svg" width={100} height={100} />
        <div className="flex flex-1 flex-row items-center">
          <div className="hidden md:flex items-center">
            {NavbarTopic.map((navbar, index) => (
              <Link key={index} href={navbar.path}>
                <a
                  onClick={(e) => setNavabarText(navbar.text)}
                  className={
                    navbar.text == NavabarText
                      ? "border-b-4 border-blue-800 ml-20 text-2xl font-light text-black"
                      : "ml-20 text-2xl font-light text-black hover:border-b-4 border-blue-800"
                  }
                >
                  {navbar.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center">
          <div className="py-3 px-10 border rounded-2xl bg-gray-100 mr-10 text-center text-blue-800 text-xl font-medium hover:bg-blue-800 hover:text-gray-100">
            Login
          </div>
          <div className="py-3 px-10 border rounded-2xl bg-gray-100 mr-10 text-center text-blue-800 text-xl font-medium hover:bg-blue-800 hover:text-gray-100">
            Register
          </div>
        </div>
        <div onClick={handleNav} className="md:hidden float-right">
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-10"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
              <Link href="/">
                <a>
                  <Image
                    src="/images/vercel.svg"
                    alt="/"
                    width="125"
                    height="50"
                    className="cursor-pointer"
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {NavbarTopic.map((navbar, index) => (
                <Link key={index} href={navbar.path}>
                  <li
                    onClick={() => setNav(false)}
                    className=" text-xl font-light text-black hover:border-b-4 w-1/4 border-blue-800 p-4"
                  >
                    {navbar.text}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                {MainList.map((main, index) => (
                  <Link key={index} href={main.path}>
                    <a target="_blank" rel="noreferrer">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        {main.icon}
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
