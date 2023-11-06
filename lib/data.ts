import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import depodoneWebsiteImg from "@/public/depodone-website.png";
import depodonePanelImg from "@/public/depodone-panel.png";
import depodoneManagementImg from "@/public/depodone-manage.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "Izmir, TR",
    description:
      "In 2021, I graduated from Izmir University of Economics as a Software Engineer",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Izmir, TR",
    description:
      "I worked as a front end developer in a global company for a few months.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Izmir, TR",
    description:
      "For more than 1 year I have been working as a front end developer in another company, I continue to improve myself, learn and enjoy :)",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Introduction Site",
    description:
      "This website was my first real project and I completed it on my own from start to finish, so I don't think I'll ever forget it :)",
    tags: ["React", "TailwindCSS", "Framer"],
    href: "https://depodone.com/",
    imageUrl: depodoneWebsiteImg,
  },
  {
    title: "Order Panel",
    description:
      "A panel where customers can manage their orders from start to finish. It has many features such as language options, filtering and pagination.",
    tags: ["Vue3.js", "Vuetify", "i18n", "Easy Data Table"],
    href: "https://panel.depodone.com/",
    imageUrl: depodonePanelImg,
  },
  {
    title: "Management Panel",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Vue3.js", "Vuetify", "Easy Data Table"],
    href: "",
    imageUrl: depodoneManagementImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Framer Motion",
  "Vue.js",
  "Vuetify",
  "TailwindCSS",
  "Object-Oriented Programming",
] as const;
