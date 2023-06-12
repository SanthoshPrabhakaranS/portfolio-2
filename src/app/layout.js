"use client";
import NavBar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 90,
    },
  };

  return (
    <html lang="en">
      <head>
        <title>Santhosh Prabhakaran</title>
      </head>
      <body className={"bg"}>
        <motion.div
          className="outer-circle"
          variants={variants}
          animate={cursorVariant}
          transition={{ duration: 0.4 }}
        >
          <div className="cursor"></div>
        </motion.div>
        <NavBar />
        <div className="max-w-[1000px] mx-auto py-2 px-3 mt-5">{children}</div>
      </body>
    </html>
  );
}
