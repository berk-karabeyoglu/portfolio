import depodoneManagementImg from "@/public/depodone-manage.png";
import depodonePanelImg from "@/public/depodone-panel.png";
import depodoneWebsiteImg from "@/public/depodone-website.png";
import aiPlatformImg from "@/public/ai-platform.png";
import paltivityImg from "@/public/paltivity.png";
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
    title: "Full Stack Developer",
    location: "Izmir, TR",
    description:
      "Built the company's website from scratch using React.js and Next.js. Developed two large-scale management panels — a Supplier Panel and a Management Panel — using Vue.js, enabling end-to-end control of orders and shipments.",
    icon: React.createElement(FaReact),
    date: "2022 - 2025",
  },
  {
    title: "Jr. Software Engineer",
    location: "Izmir, TR",
    description:
      "Contributed to a CMS project and completed a two-month intensive frontend-focused training program.",
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
    title: "AI Image Platform",
    description:
      "A SaaS platform for AI-powered image generation with user auth and a credit system.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    href: "https://ai-platform-5n5x.vercel.app/",
    imageUrl: aiPlatformImg,
  },
  {
    title: "Paltivity",
    description:
      "A social app to discover and join nearby events with real-time chat and notifications.",
    tags: ["React Native", "Expo", "Supabase", "TypeScript"],
    href: "",
    imageUrl: paltivityImg,
  },
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
  "React Native",
  "Expo",
  "Supabase",
  "Framer Motion",
  "Object-Oriented Programming",
] as const;
