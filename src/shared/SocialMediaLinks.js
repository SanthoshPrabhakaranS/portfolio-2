import React from "react";
import { socialMediaItems } from "@/app/icons/icons";

const SocialMediaLinks = () => {
  return (
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
  );
};

export default SocialMediaLinks;
