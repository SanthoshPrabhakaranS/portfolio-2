import { BsArrowRight, BsLink45Deg } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineMenu,
} from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import {MdOutlineCircle, MdRoundaboutLeft} from "react-icons/md"

export const RightArrow = <BsArrowRight size={28} />;
export const Github = <AiFillGithub size={20} />;
export const Linkedin = <TiSocialLinkedin size={25} />;
export const Instagram = <AiOutlineInstagram size={20} />;
export const Menu = <AiOutlineMenu size={30} />;
export const Cancel = <RxCross1 size={25} />;
export const Circle = <MdOutlineCircle size={17} />;
export const Link = <BsLink45Deg size={20} />;

export const socialMediaItems = [
  {
    name: Linkedin,
  },
  {
    name: Github,
  },
  {
    name: Instagram,
  },
];
