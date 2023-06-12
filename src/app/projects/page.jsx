"use client";
import NextPageNavigation from "@/shared/NextPageNavigation";
import SocialMediaLinks from "@/shared/SocialMediaLinks";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link as Url, socialMediaItems } from "../icons/icons";
import { projectsItems } from "./projectData";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="mt-[2.5rem] flex flex-col gap-[5rem] pb-[1rem] font-Poppins"
      >
        <h1 className="text-[2.6rem] md:text-[3.3rem] font-[1000]">
          Projects.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          {projectsItems.map((item) => {
            return (
              <div
                key={item.id}
                className="relative group cursor-pointer flex justify-center"
              >
                <div className="h-full w-full absolute top-0 bottom-0 bg-gray-200 bg-opacity-20"></div>
                <div className="h-full w-full max-w-[500px] rounded-lg absolute top-0 bottom-0 flex flex-col gap-1 justify-end p-4 px-5 group-hover:opacity-100 opacity-0 bg-opacity-40 bg-gradient-to-t from-black to-white/50 transition-all duration-500">
                  <h1 className="text-[1.4rem] font-[1000] text-white flex items-center gap-1">
                    {item.title}
                    <a href={item.link}>{Url}</a>
                  </h1>
                  <p className="text-[.9rem] text-gray-100">{item.desc}</p>
                  <span className="flex flex-row gap-2 flex-wrap">
                    {item.technologies.map((tech, Idx) => {
                      return (
                        <p
                          key={Idx}
                          className="px-2 bg-gray-500 text-white whitespace-nowrap text-[.6rem] rounded-full"
                        >
                          {tech}
                        </p>
                      );
                    })}
                  </span>
                </div>
                <Image
                  src={item.url}
                  alt="img"
                  className="h-[300px] md:h-[400px] w-full max-w-[500px] mx-auto object-cover rounded-lg"
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <NextPageNavigation
            title={"Let's Go To My Resume"}
            path={"projects"}
          />
          <div className="flex flex-row gap-3 items-center">
            {socialMediaItems.map((item, idx) => {
              return (
                <Link
              href={`/${item.link}`}
                key={idx}
                className="cursor-pointer hover:scale-110 transition-all duration-500 text-paragraph"
              >
                {item.name}
              </Link>
              );
            })}
          </div>
        </div>
        <div className="text-[18rem] font-[1000] opacity-[.02] -z-[1] font-Arbiral overflow-visible fixed bottom-[15%] left-0 whitespace-nowrap">
          <h1>Projects.</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
