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
    <div className="w-full md:h-[75rem] s:h-[56.25rem] bg-[#0E1210]  text-white">
      <NavBar />
      <h1 className=" bg-clip-text font-semibold s:text-[3.75rem] md:text-[8rem] text-center mt-[3.75rem] text-transparent bg-gradient-to-t from-[#FFFFFF]  to-[#6B9984] ">
        SplitWave
      </h1>
      <p className=" lg:w-[66.5rem] md:w-full s:w-full m-auto mt-[1.25rem] s:px-[0.625rem] md:px-[0rem] s:text-[1.125rem] md:text-[1.5rem] font-normal text-center leading-[1.75rem] ">
        Your go-to Solana app for all things money! From seamless bill splitting
        and payments to tracking expenses and analyzing spending habits. Connect
        socially, share financial wisdom, and explore a world of investments,
        making every financial move an adventure. Join the waitlist now and be
        first in line to ride the SplitWave—where finance meets fun! 🌊💰
      </p>
      <div
        className=" s:mt-[1.5625rem] md:mt-[60px] relative z-10 m-auto flex bg-[#6B9984]  text-white s:text-[1.125rem] md:text-[1.625rem] font-normal s:w-[9.375rem] md:w-[13.5rem] s:h-[2.5rem] md:h-[3.9375rem] items-center justify-center rounded-[1.125rem]  "
        onClick={openModal}
      >
        <h1>Join Waitlist</h1>
      </div>
      <div className=" w-3/4 h-auto m-auto s:mt-5 ">
        <Image
          src={background}
          alt="background"
          width={1226}
          height={661}
          className=" "
        />
      </div>

      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <img className="w-1/2 h-auto block mx-auto" src={background} alt=""/>
</div> */}

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

//s:h-[56.25rem] md:h-[68.75rem]
//className="absolute s:mt-[0rem] md:mt-[3.75rem] s:top-1/2 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-0 s:w-full s:h-[25rem] md:w-[76.625rem] md:h-[46.875rem]"
