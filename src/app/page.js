"use client";
import Link from "next/link";
import "./globals.css";
import { motion } from "framer-motion";
import SocialMediaLinks from "@/shared/SocialMediaLinks";
import NextPageNavigation from "@/shared/NextPageNavigation";
import { socialMediaItems } from "./icons/icons";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="h-full w-full flex flex-col gap-5 mt-5 font-Poppins"
    >
      <div className="stack" style={{ "--stacks": 1 }}>
        <span style={{ "--index": 0, padding: "10px 0" }}>
          I&apos;m Santhosh Prabhakaran
        </span>
      </div>
      <div className="flex flex-col gap-5 text-paragraph">
        <p className="text-[.9rem] md:text-[1rem]">
          Your friendly neighborhood full-stack developer and JavaScript
          engineer. I am driven by a sense of responsibility and a desire to
          make a positive impact with my web development skills, I craft dynamic
          and visually stunning applications that captivate users, much like
          Spider-Man&apos;s acrobatic maneuvers.
        </p>
        <p className="text-[.9rem] md:text-[1rem]">
          Every day, I spin my web of innovative{" "}
          <Link
            href={"/projects"}
            className="font-semibold text-[.9rem] md:text-[1rem] text-black hover:underline cursor-pointer hover:text-blue-700"
          >
            PROJECTS
          </Link>
          , transforming ideas into reality. Have a project in mind? Swing by
          and{" "}
          <Link
            href={"/contact"}
            className="font-semibold text-[.9rem] md:text-[1rem] text-black hover:underline cursor-pointer hover:text-blue-700"
          >
            CONTACT
          </Link>{" "}
          me a line, just like Spider-Man swinging from skyscrapers.{" "}
        </p>
        <NextPageNavigation title={"See More About Me"} path={"about"} />
        <div className="flex flex-row gap-3 items-center">
      {socialMediaItems.map((item, idx) => {
        return (
          <span
            key={idx}
            className="cursor-pointer hover:scale-110 transition-all duration-500 text-paragraph"
          >
            {item.name}
          </span>
        );
      })}
    </div>
      </div>
      <div className="text-[18rem] font-[1000] opacity-[.02] -z-[1] font-Arbiral overflow-visible fixed bottom-[15%] left-0 whitespace-nowrap">
        <h1>Sp.</h1>
      </div>
    </motion.main>
  );
}
