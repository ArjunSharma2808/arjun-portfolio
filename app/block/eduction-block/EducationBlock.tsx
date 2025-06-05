"use client";

import React from "react";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

const ContactBlock = () => {
  const details = [
    {
      imagePath: "/sit.jpg",
      degree: "Bachelor of Engineering",
      branch: "Artificial Intelligence and Data Science",
      duration: "2021 - 2025",
      college: "Siddaganga Institute Of Technology",
      CGPA: "7.70 CGPA",
    },
  
  ];

  return (
    <div className="min-h-screen flex flex-col items-center font-inter px-4 py-6">
      {/* Heading with animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Education
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-5xl">
        {details.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <EducationCard
              imagePath={item.imagePath}
              degree={item.degree}
              branch={item.branch}
              duration={item.duration}
              college={item.college}
              CGPA={item.CGPA}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactBlock;
