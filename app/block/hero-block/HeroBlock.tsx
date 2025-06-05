"use client";

import dynamic from "next/dynamic";
import React from "react";
import TypingText from "./TypingText";
import { motion } from "framer-motion";


import { VscGithubInverted } from "react-icons/vsc";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


const LottiePlayer = dynamic(
  () => import("@/components/lottiefile-animation/LottiePlayer"),
  { ssr: false }
);


const socialLinks = [
  {
    title: "GitHub",
    tag: <VscGithubInverted size={24} />,
    url: "https://github.com/ArjunSharma2808",
  },
  {
    title: "Instagram",
    tag: <BiLogoInstagramAlt size={24} />,
    url: "https://instagram.com/http.arjun.07",
  },
  {
    title: "X/Twitter",
    tag: <FaXTwitter size={20} />,
    url: "https://x.com/",
  },
  {
    title: "LinkedIn",
    tag: <FaLinkedin size={24} />,
    url: "https://www.linkedin.com/in/arjun-sharma-99351a1b8/",
  },
  {
    title: "Leetcode",
    tag: <SiLeetcode size={22} />,
    url: "https://leetcode.com/u/",
  },
];

const HeroPage = () => {
  return (
    <div className="h-screen  text-black dark:text-white flex items-center justify-center px-4 relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 -z-10 h-full w-full px-5 py-24
    bg-white
    [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]
    dark:bg-[#0A0A0A]
    dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
      ></div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-7 justify-between rounded-xl overflow-hidden shadow-lg p-4">
        {/* Left Section */}
        <div className="flex-1 text-start px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight`}
          >
            Arjun Sharma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-2xl font-bold text-gray-700 dark:text-slate-300 flex gap-2"
          >
            I am a <TypingText />
          </motion.p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200"
              >
                {social.tag}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 p-4 shadow-inner">
            <LottiePlayer
              path="animation.json"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-5 w-full text-center text-sm text-gray-900 dark:text-gray-400">
        Made with ❤ and &lt;/&gt; by Arjun
      </div>
    </div>
  );
};

export default HeroPage;
