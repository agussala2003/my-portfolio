export type SiteConfig = typeof siteConfig;
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHtml5,
  FaCss3,
  FaReact,
  FaAngular,
  FaJs,
  FaJava,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import { SiSpring, SiTailwindcss, SiC } from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

export const siteConfig = {
  fullName: "Agustin Saladino",
  name: "Agustin Saladino - Portfolio",
  description:
    "Agustin Saladino's portfolio website built with Next.js and NextUI framework.",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact Me",
      href: "#contact",
    },
  ],
  socials: [
    {
      label: "Twitter",
      href: "https://twitter.com/saladinoagustin",
      icon: FaTwitter,
      color: "#1DA1F2",
    },
    {
      label: "GitHub",
      href: "https://github.com/agussala2003",
      icon: FaGithub,
      color: "#4338ca",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/agustin-saladino/",
      icon: FaLinkedin,
      color: "#0077B5",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/aguss.sala/",
      icon: FaInstagram,
      color: "#E4405F",
    },
  ],
  skills: [
    {
      label: "HTML5",
      icon: FaHtml5,
      color: "#E44D26",
    },
    {
      label: "CSS3",
      icon: FaCss3,
      color: "#1572B6",
    },
    {
      label: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      label: "Bootstrap",
      icon: FaBootstrap,
      color: "#7952B3",
    },
    {
      label: "JavaScript",
      icon: FaJs,
      color: "#F0DB4F",
    },
    {
      label: "React",
      icon: FaReact,
      color: "#61DAFB",
    },
    {
      label: "Angular",
      icon: FaAngular,
      color: "#DD0031",
    },
    {
      label: "Java",
      icon: FaJava,
      color: "#007396",
    },
    {
      label: "Spring",
      icon: SiSpring,
      color: "#6DB33F",
    },
    {
      label: "Native C",
      icon: SiC,
      color: "#A8B9CC",
    },
    {
      label: "Git",
      icon: FaGitAlt,
      color: "#CC2927",
    },
    {
      label: "Microsoft SQL Server",
      icon: DiMsqlServer,
      color: "#CC2927",
    },
  ],
  projects: [
    {
      title: "Containers App",
      description:
        "A full customizable app for managing containers tickets, with a complete CRUD system and a responsive design.",
      link: "https://containers-app-ab.vercel.app/",
      code: "https://github.com/agussala2003/containers-app",
      image: "/containers.png",
      techStack: ["NextJs", "Tailwind CSS", "Supabase"],
    },
    {
      title: "Gestion System",
      description:
        "A simple and interactive system for managing products, suppliers and orders.",
      link: "",
      code: "https://github.com/agussala2003/Bootcamp-ASJ-Integrador/tree/main/20231215-23-Saladino-Angular",
      image: "/salabrand.png",
      techStack: [
        "Angular",
        "Bootstrap",
        "Spring Boot",
        "Microsoft SQL Server",
      ],
    },
    {
      title: "Arusa E-commerce",
      description:
        "A complete e-commerce website with a responsive design and interactive features.",
      link: "https://agussala2003.github.io/arusa/",
      code: "https://github.com/agussala2003/arusa",
      image: "/arusa.png",
      techStack: ["React", "CSS"],
    },
    {
      title: "Cine Plus",
      description:
        "A beautiful and interactive website for a cinema, with a responsive design.",
      link: "https://agussala2003.github.io/cineplus/",
      code: "https://github.com/agussala2003/cineplus",
      image: "/cine.png",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Space Tourism",
      description:
        "A futuristic website for space tourism, with a responsive design and interactive features.",
      link: "https://agussala2003.github.io/spaceTourism/",
      code: "https://github.com/agussala2003/spaceTourism",
      image: "/space.png",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "IP Address Tracker",
      description:
        "A simple and interactive website for tracking IP addresses.",
      link: "https://agussala2003.github.io/ip-address-tracker/",
      code: "https://github.com/agussala2003/ip-address-tracker",
      image: "/adress.png",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
  ],
  experiences: [
    {
      business: "Netactica",
      charge: "CMS Developer",
      period: "July 2022 - May 2023",
    },
    {
      business: "ASJ Servicios",
      charge: "Full Stack Developer",
      period: "December 2023 - Present",
    },
  ],
  education: [
    {
      business: "Instituto San Luiz Gonzaga",
      charge: "Economy and Administration",
      period: "2017 - 2021",
    },
    {
      business: "Universidad Nacional de la Matanza",
      charge: "Systems Engineering",
      period: "2021 - Present",
    },
    {
      business: "Coderhouse",
      charge: "Front End React Developer",
      period: "2022",
    },
    {
      business: "Particular Course",
      charge: "Advanced B2",
      period: "2022",
    },
    {
      business: "Plataforma 5",
      charge: "Full Stack Developer",
      period: "2024",
    },
  ],
};
