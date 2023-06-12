import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { RightArrow } from "../app/icons/icons"

const NextPageNavigation = ({ title, path }) => {
  return (
    <Link
          href={`/${path}`}
          className="flex flex-row gap-2 items-center hover:underline cursor-pointer mt-3 text-[.9rem] md:text-[.9rem] text-paragraph"
        >
          {title}
          <motion.span
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 30, opacity: 1 }}
            exit={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {RightArrow}
          </motion.span>
        </Link>
  )
}

export default NextPageNavigation