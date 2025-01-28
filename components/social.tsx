"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

interface SocialProps {
  containerStyle: string;
  iconsStyle: string;
}
const Social = ({ containerStyle, iconsStyle }: SocialProps) => {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/SilvanusStevenCooper" },
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/silvanus-steven-cooper-82266a173/",
    },
    { icon: <FaFacebook />, path: "https://web.facebook.com/StevenTheWriter/" },
    { icon: <FaTwitter />, path: "https://x.com/silvanus_cooper" },
  ];
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconsStyle}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
