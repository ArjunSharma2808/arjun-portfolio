"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Experience = {
  role: string;
  organization: string;
  duration: string;
  logo: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    organization: "Stacklane",
    duration: "March 2025 – Present",
    logo: "/stacklane.png",
    points: [
      "Built a responsive UI using React and Tailwind CSS for seamless food ordering.",
      "Developed a secure backend using Hono, Node.js, and Prisma with REST APIs for user and admin interactions.",
      "Integrated PostgreSQL for reliable and structured data management.",
      "Implemented authentication, cart management, and real-time order tracking.",
      "Focused on clean code, component reusability, and performance optimization.",
    ],
  },
];

const ExperienceCard: React.FC = () => {
  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center justify-center p-6">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-black dark:text-white"
      >
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Experience
        </h2>
      </motion.div>

      {/* Timeline Content */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl relative">
        {/* Center Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-black dark:bg-white -translate-x-1/2 z-0" />

        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            {/* Timeline Icon */}
            {index === 0 && (
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="z-10 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex justify-center md:block"
              >
                <div className="w-24 h-24 rounded-full border border-white bg-[#0E1117] flex items-center justify-center overflow-hidden mx-auto">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={exp.logo}
                      alt="Logo"
                      width={40}
                      height={12}
                      className="object-contain rounded-full"
                    />
                    <h4 className="text-white text-xs text-center">
                      stacklane
                    </h4>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex justify-end md:pr-20 z-10 mt-20 md:mt-0"
            >
              <div className="relative bg-[#0E1117] text-white rounded-md p-8 max-w-xl shadow-[0_2px_0_0_rgba(255,255,255,0.3)] w-full">
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-y-6 border-y-transparent border-l-[12px] border-l-[#2e2b3c]" />
                <p className="font-semibold mb-1 text-3xl text-white">
                  {exp.role}
                </p>
                <p className="font-mono text-sm mb-4 text-blue-500">
                  {exp.organization}
                </p>
                <ul className="list-disc list-inside space-y-3 text-sm font-normal">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Duration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex items-center justify-start md:pl-20 z-10 mt-4 md:mt-0"
            >
              <p className="text-black dark:text-white font-semibold text-base text-center w-full md:text-left">
                {exp.duration}
              </p>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
