"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  const details = [
    {
      imagePath: "/insight360.pg",
      title: "My-Hacker-News",
      projectUrl: "https://github.com/ArjunSharma2808/My-Hacker_News",
      description:
        "Developed Hackernews server clone.",
    },
    {
      imagePath: "/filelessMalware.pg",
      title: "TRAFFIC-VIOLATION-DETECTION-USING-YOLO-V8",
      projectUrl: "https://github.com/ArjunSharma2808/TRAFFIC-VIOLATION-DETECTION-USING-YOLO-V8",
      description:
        "Developed ML model using YOLOv8 for the detection of traffic violation detection",
    },
    {
      imagePath: "/swiggy.jg",
      title: "IIT-JEE-AI-AGENTS",
      projectUrl: "https://github.com/ArjunSharma2808/IIT-JEE-AI-AGENTS",
      description: "AI Agents to create questions for JEE Advanced using GPT-4o ",
    },
    {
      imagePath: "/colonCancer.jg",
      title: "Medical-Information-Extraction-From-Clincal-Text",
      projectUrl: "https://github.com/ArjunSharma2808/Medical-Information-Extraction-From-Clincal-Text",
      description:
        "This is a project regarding medical information extraction from clinical text using clinical text",
    },
  ];

  return (
    <div className="min-h-screen font-inter px-4 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {details.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ProjectCard
              imagePath={item.imagePath}
              title={item.title}
              projectUrl={item.projectUrl}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
