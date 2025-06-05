"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutBlock = () => {
  return (
    <div className="min-h-screen px-4 md:px-16 py-10 text-black dark:text-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          About
        </h2>
      </div>

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
        {/* Left Card with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 shadow-md bg-[#0E1117] w-full lg:w-[390px] flex flex-col items-center text-center"
        >
          <div className="relative w-40 h-40 mb-4 ">
            <Image
              src="/PIC2.JPG"
              alt="Arjun Sharma"
              fill
              className="rounded-full object-cover border-4 border-[#f6e5c8]"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Arjun Sharma</h3>
          <ul className="text-left space-y-2 text-sm text-white">
            <li>
              <span className="font-semibold">› Birthday:</span> August 2002
            </li>
            <li>
              <span className="font-semibold">› Phone:</span>{" "}
              <a
                href="tel:+918003584987"
                className="underline hover:text-orange-400"
              >
                +91 8003584987
              </a>
            </li>
            <li>
              <span className="font-semibold">› City:</span>{" "}
              <span id="location">Rajasthan, India</span>
            </li>
            <li>
              <span className="font-semibold">› Email:</span>{" "}
              <a
                href="mailto:arjun.1si21ad010@gmail.com"
                className="underline hover:text-orange-400"
              >
                arjun.1si21ad010@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex-grow" />
        </motion.div>

        {/* Right Card with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 shadow-md w-full flex flex-col justify-between bg-[#0E1117]"
        >
          <p className="leading-relaxed px-4 text-[15px] text-white md:text-base text-justify">
            <strong>Greetings,</strong>
            <br />
            <br />I am Arjun Sharma, a driven and innovative AI and ML
            engineering with expertise in web development. My academic foundation,
            cultivated at Siddaganga Institute of technology, serves as the
            bedrock for my proficiency in a diverse array of technologies. This
            portfolio offers a comprehensive overview of my capabilities,
            encompassing robust web development skills—leveraging the Full
            stack—alongside a strong command of core programming languages,
            notably C++ and Python. I am passionate about crafting elegant,
            efficient solutions and continuously expanding my knowledge horizon
            within the dynamic realm of technology.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutBlock;
