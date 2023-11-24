"use client";
import Image from "next/image";
//import styles from "./page.module.css";
import React, { useState } from "react";
import NavBar from "./components/navBar";
import Background from "./images/background.png";
import WaitlistForum from "./components/waitlistForum";
import Modal from "@mui/material/Modal";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="w-full h-[59.375rem] relative ">
      <NavBar />
      <div className=""></div>
      <h1 className=" bg-clip-text font-semibold text-[8rem] text-center mt-[3.75rem] text-transparent bg-gradient-to-t from-[#FFFFFF]  to-[#6B9984] ">
        {" "}
        SplitWave{" "}
      </h1>
      <p className=" lg:w-[66.5rem] m-auto mt-[1.25rem] text-[1.5rem] font-normal text-center leading-[1.75rem] ">
        {" "}
        SplitWave streamlines expense sharing by effortlessly dividing bills
        among friends, offering a hassle-free solution for managing group
        finances. Simplify your financial interactions with this user-friendly
        app.
      </p>
      <div
        className=" mt-[5rem] relative z-10 m-auto flex bg-[#6B9984]  text-white text-[1.625rem] font-normal w-[13.5rem]  h-[3.9375rem] items-center justify-center rounded-[1.125rem]  "
        onClick={openModal}
      >
        <h1>Join Waitlist</h1>
      </div>
      <div className=" absolute left-[3.75rem] z-0 top-[12.5rem] w-[76.625rem] h-[38.0625rem]   ">
        <Image src={Background} alt="background" />
      </div>
      <Modal open={isModalOpen} onClose={closeModal}>
        <WaitlistForum onClose={closeModal} />
      </Modal>
    </div>
  );
}
