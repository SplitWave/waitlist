"use client";
import Image from "next/image";
//import styles from "./page.module.css";
import React, { useState } from "react";
import NavBar from "./components/navBar";
import WaitlistForum from "./components/waitlistForum";
import Modal from "@mui/material/Modal";
import background from "../public/images/background.png";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="w-full h-[59.375rem] relative  text-white">
      <NavBar />
      <div className=""></div>
      <h1 className=" bg-clip-text font-semibold s:text-[3.75rem] md:text-[8rem] text-center mt-[3.75rem] text-transparent bg-gradient-to-t from-[#FFFFFF]  to-[#6B9984] ">
        {" "}
        SplitWave{" "}
      </h1>
      <p className=" lg:w-[66.5rem] md:w-full s:w-full m-auto mt-[1.25rem] s:px-[0.625rem] md:px-[0rem] s:text-[1.125rem] md:text-[1.5rem] font-normal text-center leading-[1.75rem] ">
        {" "}
        SplitWave streamlines expense sharing by effortlessly dividing bills
        among friends, offering a hassle-free solution for managing group
        finances. Simplify your financial interactions with this user-friendly
        app.
      </p>
      <div
        className=" mt-[3.75rem] relative z-10 m-auto flex bg-[#6B9984]  text-white s:text-[1.125rem] md:text-[1.625rem] font-normal s:w-[9.375rem] md:w-[13.5rem] s:h-[2.5rem] md:h-[3.9375rem] items-center justify-center rounded-[1.125rem]  "
        onClick={openModal}
      >
        <h1>Join Waitlist</h1>
      </div>
      {/* <div className=" absolute  z-0 top-[12.5rem] w-[76.625rem] h-[38.0625rem]   ">
        <Image src={Background} alt="background" />
      </div> */}
      <div className="absolute md:mt-[5.625rem] s:top-1/3 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-0 s:w-full s:h-[25rem] md:w-[76.625rem] md:h-[38.0625rem]">
        <Image src={background} alt="background" className=" w-full h-full " />
      </div>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        className=" md:w-[23.9375rem] h-[23.125rem] m-auto "
      >
        <WaitlistForum />
      </Modal>
    </div>
  );
}
