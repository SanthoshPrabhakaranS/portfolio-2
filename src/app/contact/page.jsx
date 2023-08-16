"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Circle, socialMediaItems } from "../icons/icons";
import NextPageNavigation from "@/shared/NextPageNavigation";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bqwu08a",
        "template_5maihea",
        form.current,
        "IVPrhMBMKOY3NjiPe"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="mt-[2.5rem] flex flex-col gap-[3rem] pb-[1rem]"
    >
      <h1
        style={{ fontFamily: "noi_grotesk_trialblack" }}
        className="text-[2.6rem] md:text-[3.3rem] font-[1000]"
      >
        Contact.
      </h1>
      <div>
        <p className="text-paragraph text-[.9rem] md:text-[.95rem]">
          Get in touch or shoot me an email directly on{" "}
          <span className="font-[1000] text-black text-[.9rem] md:text-[.95rem]">
            {" "}
            santhoshprabhakaran02@gmail.com
          </span>
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-[1rem] -mt-4"
      >
        <input
          required
          type="text"
          placeholder="Name"
          name="from_name"
          className="bg-transparent border border-gray-300 w-full max-w-[500px] focus:outline-none p-1 px-2 text-[.9rem]"
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="from_email"
          className="bg-transparent border border-gray-300 w-full max-w-[500px] focus:outline-none p-1 px-2 text-[.9rem]"
        />
        <textarea
          required
          placeholder="Message"
          name="message"
          className="bg-transparent border border-gray-300 w-full max-w-[500px] focus:outline-none p-1 px-2 text-[.9rem] min-h-[200px] max-h-[300px]"
        />
        <div>
          <button
            type="submit"
            className={`py-2 px-5 font-semibold bg-black text-white justify-start rounded-md text-[.8rem]`}
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-2">
        <NextPageNavigation title={"Go Back Home"} path={""} />
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
        <h1 style={{ fontFamily: "noi_grotesk_trialblack" }}>Contact.</h1>
      </div>
    </motion.div>
  );
};

export default Contact;
