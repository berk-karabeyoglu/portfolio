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
        My journey with{" "}
        <span className="font-medium">front-end technologies </span> began
        during my internship, where I discovered my passion for this field.
        After graduating from the Department of
        <span className="font-medium"> Software Engineering</span> at Izmir
        University of Economics in 2021, I have been continuously working to
        enhance my skills and knowledge.
        <span className="italic">
          My favorite aspect of programming
        </span> is <span className="font-medium">problem-solving.</span> I{" "}
        <span className="underline">enjoy</span> the sense of accomplishment
        that comes with finally finding a solution to a challenge. My primary
        stack includes{" "}
        <span className="font-medium">
          React.js and Vue.js, with experience in TypeScript, Next.js and
          TailwindCSS.{" "}
        </span>
        I am always eager to learn new technologies and improve my skills.
        Currently, I work as a full stack developer.
      </p>
      <p>
        <span className="italic">Outside of coding,</span> I enjoy playing
        games, watching movies, going for walks with my headphones on, and
        always <span className="italic">trying out</span> new things and
        expanding my knowledge.
      </p>
    </motion.section>
  );
}
