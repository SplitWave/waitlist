"use client";
import React, { useState } from "react";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../lib/firebase";
import Image from "next/image";
import "../globals.css";
import { TwitterShareButton } from "react-share";
import { FaTwitter } from "react-icons/fa";
import logo from "../../public/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WaitlistForum = ({ onClose }: any) => {
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isShared, setIsShared] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const docRef = doc(db, "waitlist", email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Email already registered");
        toast("Email already registered");
        setIsLoading(false);
      } else {
        //console.log("");
        await setDoc(docRef, { email, walletAddress });
        console.log("Waitlisted successfully");
        toast("Waitlisted successfully 🎉");
        // Set isShared to true
        setIsShared(true);
        setIsLoading(false);
      }

      // Add data to Firestore
      // await addDoc(collection(db, "waitlist"), {
      //   email,
      //   walletAddress,
      // });
    } catch (error) {
      console.error("Error adding data to Firestore:", error);
      setIsLoading(false);
      toast("Pls try again!!");
    }
  };

  return (
    <div className="bg-[#181F1C] p-8 mt-[3.125rem] m-auto shadow-md  rounded-[2.125rem] border-[0.0625rem] border-white custom-box-shadow ">
      <div className=" md:w-[3.8125rem] md:h-[3.8125rem] m-auto relative ">
        <Image src={logo} alt="logo" fill />
      </div>

      {!isShared && (
        <>
          <h1 className=" text-center s:text-[1.125rem] md:text-[1.25rem] text-white font-semibold mt-[1.625rem] ">
            Join the waitlist
          </h1>
          <p className=" text-center mt-[0.9375rem] s:text-[0.875rem] md:text-[1rem] text-white font-normal ">
          We know you can't wait to ride the wave. Follow us on our social media platforms and fill in your correct details
          </p>
          <form onSubmit={handleSubmit} className=" px-[0.625rem] w-full ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className=" w-full mt-[1rem] h-[2.5rem] px-[0.625rem] s:text-[0.875rem] md:text-[1rem] text-[#6B9984] rounded-[1.0625rem] bg-[#24332C] border-[#6B9984] border-[0.0625rem] "
            />
            <br />
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter your SOL address (optional) "
              className=" w-full mt-[1rem] h-[2.5rem] px-[0.625rem] s:text-[0.875rem] md:text-[1rem] text-[#6B99862B] rounded-[1.0625rem] bg-[#24332C] border-[#6B9984] border-[0.0625rem] "
            />
            <br />
            <div className=" w-[8.0625rem] h-[2.375rem] m-auto bg-[#6B9984] text-white text-center s:text-[0.875rem] md:text-[1rem] rounded-[1.5625rem] mt-[1rem] flex items-center justify-center ">
              <button type="submit">
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
            <h1 className=" text-[#6B9984] text-center s:text-[0.875rem] md:text-[1rem] my-[0.625rem] ">
              Have an invite code?
            </h1>
          </form>
        </>
      )}

      {isShared && (
        <div>
          <p className=" text-center mt-[0.9375rem] s:text-[1.125rem] md:text-[1.25rem] text-white font-bold">
            You are in! 🎉
          </p>
          <h1 className=" md:w-[15.625rem] mt-[0.9375rem] m-auto s:text-[0.875rem] md:text-[1rem] text-[#6B9984] text-center ">
            We will email you the invite code when the app is live.
          </h1>
          <div className=" w-[12.5rem] h-[3.125rem] m-auto flex justify-center items-center bg-[#6B9984] rounded-[1.25rem] mt-[0.9375rem] ">
            <TwitterShareButton
              title="Ready to level up your finance game on Solana? I just joined the @splitwaveapp waitlist! 🚀🌊
               Don't miss the wave - join me now!!"
              url="splitwave.app"
              className=" s:text-[1.125rem] md:text-[1.25rem] text-white font-bold flex flex-row  "
            >
              Share this
              <FaTwitter size={25} className=" ml-[0.625rem] " />
            </TwitterShareButton>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default WaitlistForum;
