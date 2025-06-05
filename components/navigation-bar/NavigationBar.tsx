"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToogle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Revalia } from "next/font/google";

const revalia = Revalia({
  subsets: ["latin"],
  weight: "400",
  });

export default function NavigationBar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const paths = {
    home: "/",
    about: "/block/about-block",
    education: "/block/eduction-block",
    experience: "/block/experience-block",
    skills: "/block/skills-block",
    projects: "/block/projects-block",
    resume:
      "https://drive.google.com/file/d/1iGemOAXi8FTNwpmVurO_GuoGZMfgr_v-/view?usp=drive_link",
    contact: "/block/contact-block",
  };

  const navItems = [
    { label: "Home", href: paths.home },
    { label: "About", href: paths.about },
    { label: "Education", href: paths.education },
    { label: "Experience", href: paths.experience },
    { label: "Skills", href: paths.skills },
    { label: "Projects", href: paths.projects },
    { label: "Resume", href: paths.resume },
    { label: "Contact", href: paths.contact },
  ];



  const toggleMenu = () => setIsOpen((prev) => !prev);
  

  return (
    
    <div className="bg-[#0E1117] sticky top-0 shadow py-8 px-4 z-50 text-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href={paths.home}
          className={`font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-400 to-orange-400 ${revalia.className}`}
        >
          &lt;Arjun Sharma/&gt;
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white ">
            {isOpen ? (
              <X size={28} className=" dark:text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-7 items-center font-semibold dark:text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
    relative pb-1
    ${path === item.href ? "text-orange-400 font-bold" : ""}
    hover:text-orange-400 transition
    before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px]
    before:w-0 before:bg-orange-700 before:transition-all before:duration-300
    hover:before:w-full
  `}
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 p-4 rounded-lg bg-transparent shadow-lg grid grid-cols-3 gap-4 font-semibold dark:text-white text-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`$${
                path === item.href ? "text-blue-800 font-bold" : ""
              } hover:text-blue-500 transition`}
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </div>
      )}
    </div>
  );
}
