"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My first introduction to{" "}
        <span className="font-medium">front end technologies </span> was at the
        internship and here I realized that I want to move forward in this
        field. After graduating from Izmir University of Economics, Department
        of
        <span className="font-medium"> Software Engineering</span>, in 2021, I
        tried to improve myself in this field and still I am.{" "}
        <span className="italic">My favorite part of programming</span> is the{" "}
        <span className="font-medium">problem-solving aspect.</span> I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is is{" "}
        <span className="font-medium">
          React.js, Vue.js. I'm also familiar with TypeScript and TailwindCSS.{" "}
        </span>
        I'm always excited to learn new things. I currently work as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        games, watching movies, going for a walk with my headphones on and{" "}
        <span className="italic">trying/learning</span> new things.
      </p>
    </motion.section>
  );
}
