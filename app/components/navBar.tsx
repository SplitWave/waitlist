import React from "react";
//import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "../images/logo.png";
import { text } from "stream/consumers";
import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full px-[2.5rem] md:flex md:flex-row items-center md:justify-between">
      <div className=" md:w-[16rem] flex flex-row items-center ">
        <Image
          src={Logo}
          alt="logo"
          className=" md:w-[3.5625rem] md:h-[3.5625rem] "
        />
        <div className=" font-semibold text-[2.5rem] ml-[0.625rem] leading-[2.9375rem] ">
          SplitWave
        </div>
      </div>

      <div className=" w-1/3 md:flex md:flex-row font-normal text-[1.625rem] leading-[1.875rem] md:justify-evenly ">
        <div className=""> Home</div>
        <div className=" ml-[0.625rem]  relative pb-[0.5rem] ">
          Join waitlist
          <div className="absolute inset-x-0 bottom-0 h-1 rounded-[0.625rem] bg-gradient-to-r from-[#FFFFFF] via-[#6B9984] to-[#6B9984]"></div>
        </div>

        <div className="flex space-x-4 text-[#6B9984] ml-[1.25rem] ">
          <a
            href="https://twitter.com/splitwaveapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://discord.gg/2G9XftNgTN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={30} />
          </a>
          <a
            href="https://t.me/splitwave"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
