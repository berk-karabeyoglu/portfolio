import depodoneManagementImg from "@/public/depodone-manage.png";
import depodonePanelImg from "@/public/depodone-panel.png";
import depodoneWebsiteImg from "@/public/depodone-website.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Front-End Developer",
    location: "Izmir, TR",
    description:
      "I have been working as a full stack developer in DepoDone for over a year now and I continue to improve myself, learn and enjoy :)",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Front-End Developer",
    location: "Izmir, TR",
    description:
      "I worked as a Jr. Software Engineer in EPAM for a few months.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Graduated University",
    location: "Izmir, TR",
    description:
      "In 2021, I graduated from Izmir University of Economics as a Software Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Introduction Site",
    description:
      "This website was my first real project and I completed it on my own from start to finish, so I don't think I'll ever forget it :)",
    tags: ["Next.js", "TailwindCSS", "Framer"],
    href: "https://depodone.com/",
    imageUrl: depodoneWebsiteImg,
  },
  {
    title: "Supplier Panel",
    description:
      "This panel allows you to keep track of the products, orders and shipments, thus letting you have full supervision over all of the processes.",
    tags: ["Vue3.js", "TypeScript", "i18n", "Easy Data Table"],
    href: "https://panel.depodone.com/",
    imageUrl: depodonePanelImg,
  },
  {
    title: "Management Panel",
    description:
      "A panel where customers can fully manage their orders. It has many features such as filtering, pagination and more...",
    tags: ["Vue3.js", "TypeScript", "Vuetify", "Easy Data Table"],
    href: "https://backoffice.depodone.com/auth/login",
    imageUrl: depodoneManagementImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "TailwindCSS",
  "Java",
  "Microservices",
  "Spring Boot",
  "HTML",
  "CSS",
  "JavaScript",
  "Vuetify",
  "Nuxt.js",
  "Node.js",
  "Git",
  "Framer Motion",
  "Object-Oriented Programming",
] as const;
