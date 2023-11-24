"use client";

import React, { useState } from "react";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";
import Image from "next/image";
import Logo from "../images/logo.png";
import "../globals.css";

const WaitlistForum = ({ onClose }: any) => {
  const [email, setEmail] = useState(""); 
  const [walletAddress, setWalletAddress] = useState("");
  const [isShared, setIsShared] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Add data to Firestore
      await addDoc(collection(db, "waitlist"), {
        email,
        walletAddress,
      });

      // Set isShared to true
      setIsShared(true);
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
    }
  };


  const handleTweet = () => {
    // Handle tweet functionality here
  };

  return (
    <div className="bg-[#181F1C] p-8 m-auto mt-[6.25rem] shadow-md md:w-[23.9375rem] md:h-[23.125rem] rounded-[2.125rem] border-[0.0625rem] border-white custom-box-shadow ">
      <Image
        src={Logo}
        alt="logo"
        className=" md:w-[3.8125rem] md:h-[3.8125rem] m-auto "
      />
      <h1 className=" text-center text-[1.25rem] text-white font-semibold mt-[1.625rem] ">
        Join the waitlist
      </h1>
      <form onSubmit={handleSubmit} className=" px-[0.625rem] w-full ">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
          className=" w-full mt-[1rem] h-[2.5rem] px-[0.625rem] text-[1rem] text-[#6B9984] rounded-[1.0625rem] bg-[#24332C] border-[#6B9984] border-[0.0625rem] "
        />
        <br />
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="enter your wallet address "
          className=" w-full mt-[1rem] h-[2.5rem] px-[0.625rem] text-[1rem] text-[#6B99862B] rounded-[1.0625rem] bg-[#24332C] border-[#6B9984] border-[0.0625rem] "
        />
        <br />
        <div className=" w-[8.0625rem] h-[2.375rem] m-auto bg-[#6B9984] text-white text-center text-[1rem] rounded-[1.5625rem] mt-[1rem] flex items-center justify-center ">
          <button type="submit">Submit</button>
        </div>
        <h1 className=" text-[#6B9984] text-center text-[1rem] my-[0.625rem] ">
          Have an invite code?
        </h1>
      </form>

      {isShared && (
        <div>
          <p>Form successfully shared!</p>
          <button onClick={handleTweet}>Tweet this</button>
        </div>
      )}
    </div>
  );
};

export default WaitlistForum;
