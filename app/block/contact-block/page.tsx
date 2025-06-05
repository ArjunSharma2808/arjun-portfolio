import NavigationBar from "@/components/navigation-bar/NavigationBar";
import Container from "@/components/Container";
import ContactBlock from "./ContactBlock";
import { VscGithubInverted } from "react-icons/vsc";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


const ContactPage = () => {
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
  return (
    <>
      <NavigationBar />
      <Container>
        <ContactBlock />
      </Container>
      <footer className="bg-[#0E1117] py-6 mt-10">
        <div className="max-w-5xl mx-auto flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white hover:text-[#8a8c8c] transition-colors"
            >
              {link.tag}
              <span className="sr-only">{link.title}</span>
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};

export default ContactPage;
