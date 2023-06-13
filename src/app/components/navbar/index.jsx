import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, Cancel } from "../../icons/icons";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const navItems = ["About", "Projects", "Contact"];
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathName = usePathname();

  const _toggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className="max-w-[1150px] mx-auto flex flex-row items-center justify-between p-3 mt-6 md:mt-8">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="logo"
          className=" h-[70px] w-[70px] md:h-[90px] md:w-[90px] cursor-pointer"
        />
      </Link>
      <div onClick={_toggleMenu} className="flex md:hidden">
        {Menu}
      </div>
      <ul className="text-paragraph hidden md:flex flex-row gap-5">
        {navItems.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={`/${item.toLowerCase()}`}
              className={`cursor-pointer hover:border-b border-paragraph transition text-[.97rem] px-2 ${
                pathName.includes(item.toLowerCase()) ? "hidden" : null
              }`}
            >
              {item}
            </Link>
          );
        })}
      </ul>
      {/* Mobile screens */}
      <motion.ul
        className={`text-paragraph ${
          toggleMenu ? "opacity-100" : "opacity-0"
        } md:hidden flex flex-col gap-5 fixed bg-white top-0 left-0 z-50 w-full h-screen items-center pt-[6rem] transition-all duration-500`}
      >
        {navItems.map((item, idx) => {
          return (
            <Link
              key={idx}
              href={`/${item.toLowerCase()}`}
              className="cursor-pointer hover:border-b border-paragraph text-[1.1rem] px-2"
            >
              <span
                style={{ fontFamily: "noi_grotesk_trialblack" }}
                onClick={_toggleMenu}
              >
                {item}
              </span>
            </Link>
          );
        })}
        <span onClick={_toggleMenu} className="absolute top-10 right-8">
          {Cancel}
        </span>
      </motion.ul>
    </nav>
  );
};

export default NavBar;
