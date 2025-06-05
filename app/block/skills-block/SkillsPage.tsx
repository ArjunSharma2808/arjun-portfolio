"use client";

import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";

// SVG imports
import { ReactSVG } from "@/assets/svgs/React";
import { NodeSVG } from "@/assets/svgs/Node";
import { PrismaSVG } from "@/assets/svgs/Prisma";
import { TypeScriptSVG } from "@/assets/svgs/Typescript";
import { FirebaseSVG } from "@/assets/svgs/Firebase";
import { SupabaseSVG } from "@/assets/svgs/Supabase";
import { TailwindSVG } from "@/assets/svgs/TailwindCSS";
import { PostgresSVG } from "@/assets/svgs/PostgreSQL";
import { PostmanSVG } from "@/assets/svgs/Postman";
import { DockerSVG } from "@/assets/svgs/Docker";
import { GitHubSVG } from "@/assets/svgs/Github";
import { GitSVG } from "@/assets/svgs/Git";
import { AzureSVG } from "@/assets/svgs/Azure";
import { VercelSVG } from "@/assets/svgs/Vercel";

export default function SkillsPage() {
  const skills = [
    { title: "React", Icon: ReactSVG, link: "https://reactjs.org" },
    { title: "Node.js", Icon: NodeSVG, link: "https://nodejs.org" },
    { title: "Prisma", Icon: PrismaSVG, link: "https://www.prisma.io/" },
    {
      title: "TypeScript",
      Icon: TypeScriptSVG,
      link: "https://www.typescriptlang.org",
    },
    {
      title: "Firebase",
      Icon: FirebaseSVG,
      link: "https://firebase.google.com/",
    },
    { title: "Supabase", Icon: SupabaseSVG, link: "https://supabase.com" },
    {
      title: "Tailwind CSS",
      Icon: TailwindSVG,
      link: "https://tailwindcss.com",
    },
    {
      title: "PostgreSQL",
      Icon: PostgresSVG,
      link: "https://www.postgresql.org",
    },
    { title: "Postman", Icon: PostmanSVG, link: "https://www.postman.com" },
    { title: "Docker", Icon: DockerSVG, link: "https://www.docker.com/" },
    { title: "GitHub", Icon: GitHubSVG, link: "https://github.com" },
    { title: "Git", Icon: GitSVG, link: "https://git-scm.com" },
    {
      title: "Azure",
      Icon: AzureSVG,
      link: "https://azure.microsoft.com/en-us/",
    },
    { title: "Vercel", Icon: VercelSVG, link: "https://vercel.com" },
  ];

  // Directions: alternate based on index
  const getDirection = (index: number) => {
    const directions = [
      { x: -30, y: 0 },
      { x: 30, y: 0 },
      { x: 0, y: -30 },
      { x: 0, y: 30 },
    ];
    return directions[index % directions.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="dark:text-white text-black p-6 h-screen"
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Technical Skills
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2"
      >
        {skills.map((skill, idx) => {
          const { x, y } = getDirection(idx);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x, y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <SkillsCard
                title={skill.title}
                Icon={skill.Icon}
                link={skill.link}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
