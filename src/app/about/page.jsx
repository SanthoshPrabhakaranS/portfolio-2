"use client";
import React from "react";
import { motion } from "framer-motion";
import { Circle, socialMediaItems } from "../icons/icons";
import SocialMediaLinks from "@/shared/SocialMediaLinks";
import NextPageNavigation from "@/shared/NextPageNavigation";
import Link from "next/link";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="mt-[2.5rem] flex flex-col gap-[5rem] pb-[1rem]"
    >
      <h1
        style={{ fontFamily: "noi_grotesk_trialblack" }}
        className="text-[2.6rem] md:text-[3.3rem] font-[1000]"
      >
        About Me.
      </h1>
      <div className="border-l border-gray-300 px-3 flex flex-col gap-[3rem]">
        <div className="relative">
          <span className="absolute left-[-24px] top-2 bg-gray-100 rounded-full">
            {Circle}
          </span>
          <h1 className="text-[1rem] md:text-[1.1rem] font-semibold flex flex-col md:flex-row w-full justify-start md:justify-between items-start">
            Myself
            <Link
              href={
                "https://drive.google.com/file/d/12SrbKQdJJrZxXwZL0OXcvg3cq2rN897T/view?usp=drive_link"
              }
              className="text-[.8rem] md:text-[.9rem] cursor-pointer underline"
            >
              View Resume
            </Link>
          </h1>
          <p className="text-paragraph text-[.9rem] md:text-[.95rem]">
            My name is Santhosh Prabhakaran, and I am a passionate full-stack
            developer hailing from India. I have dived into the realm of web
            development, exploring both the frontend and backend aspects. Armed
            with a solid foundation in HTML, CSS, JavaScript, and various
            frameworks, I craft immersive user interfaces and ensure seamless
            functionality. From database management to server-side scripting, I
            have gained expertise in building robust and scalable web
            applications. Continuously learning and adapting, I strive to push
            boundaries and deliver high-quality solutions that make a meaningful
            impact in the digital world.
          </p>
        </div>
        <div className="relative">
          <span className="absolute left-[-24px] top-2 bg-gray-100 rounded-full">
            {Circle}
          </span>
          <h1 className="text-[1rem] md:text-[1.1rem] font-semibold flex flex-col md:flex-row w-full justify-start md:justify-between items-start">
            Engineering
            <Link
              href={"/projects"}
              className="text-[.8rem] md:text-[.9rem] cursor-pointer underline"
            >
              View Projects
            </Link>
          </h1>
          <p className="text-paragraph text-[.9rem] md:text-[.95rem]">
            As a full-stack developer, I have embarked on a journey of
            continuous learning and growth. Throughout my career, I have honed
            my skills in HTML, CSS, and JavaScript, translating designs into
            functional and visually appealing interfaces. From collaborating
            with designers to implementing responsive layouts, I have gained
            valuable experience in creating user-friendly websites. With each
            project, I have embraced new challenges, refining my problem-solving
            abilities and expanding my knowledge of web technologies. As I
            continue to evolve in this dynamic field, I am driven by a passion
            for delivering impactful and engaging digital experiences.
          </p>
        </div>
        <div className="relative">
          <span className="absolute left-[-24px] top-2 bg-gray-100 rounded-full">
            {Circle}
          </span>
          <h1 className="text-[1rem] md:text-[1.1rem] font-semibold">
            Tech-Stack
          </h1>
          <ul className="text-paragraph flex flex-col gap-[.5rem]">
            <li className="flex flex-col">
              <h1 className="underline text-[.9rem] md:text-[.95rem]">
                Front-end languages
              </h1>
              <p className="text-[.95rem]">HTML, CSS, JS</p>
            </li>
            <li className="flex flex-col">
              <h1 className="underline text-[.9rem] md:text-[.95rem]">
                JS frameworks
              </h1>
              <p className="text-[.95rem]">React, NextJS</p>
            </li>
            <li className="flex flex-col">
              <h1 className="underline text-[.9rem] md:text-[.95rem]">
                Back-end technologies
              </h1>
              <p className="text-[.95rem]">
                NodeJS, ExpressJS, MongoDB, Firebase
              </p>
            </li>
            <li className="flex flex-col">
              <h1 className="underline text-[.9rem] md:text-[.95rem]">
                CSS frameworks
              </h1>
              <p className="text-[.95rem]">
                Bootstrap, Material UI, Tailwind, SASS
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <NextPageNavigation
          title={"Let's Continue To Projects"}
          path={"projects"}
        />
        <div className="flex flex-row gap-3 items-center">
          {socialMediaItems.map((item, idx) => {
            return (
              <a
                href={item.link}
                key={idx}
                className="cursor-pointer hover:scale-110 transition-all duration-500 text-paragraph"
                onClick={(e) => {
                  e.preventDefault();
                  const link =
                    item.link.startsWith("http://") ||
                    item.link.startsWith("https://")
                      ? item.link
                      : `http://${item.link}`;
                  window.open(link, "_self");
                }}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
      <div className="text-[14rem] font-[1000] opacity-[.02] -z-[1] font-Arbiral overflow-visible fixed bottom-[15%] left-0 whitespace-nowrap">
        <h1>About Me.</h1>
      </div>
    </motion.div>
  );
};

export default About;
