import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div
      className={
        "mx-auto my-4 flex md:flex-row flex-col-reverse justify-center items-center h-[36rem]"
      }
    >
      <div className={"md:flex-1"}>
        <div
          className={
            "font-[Righteous] md:text-6xl text-4xl font-bold text-white mb-4"
          }
        >
          Code <span className="text-[#e31d27]">Gyaan</span>
        </div>

        <div className={"md:text-2xl text-base font-normal mb-6 text-white"}>
          <p>
            Welcome to Code Gyaan, your ultimate destination for coding and
            programming tutorials.
          </p>
        </div>

        <div className="flex gap-4 mb-6 text-white">
          <span className="bg-[#0e2553] flex justify-center items-center p-2 rounded-md shadow-lg">
            <FaFacebookF />
          </span>
          <span className="bg-[#0e2553] flex justify-center items-center p-2 rounded-md shadow-lg">
            <FaLinkedinIn />
          </span>
          <span className="bg-[#0e2553] flex justify-center items-center p-2 rounded-md shadow-lg">
            <FaXTwitter />
          </span>
        </div>

        <div className="contact_btn">
          <button className="btn flex gap-2 items-center">
            Contact Us <GoArrowRight fontSize={22} />
          </button>
        </div>
      </div>
      <div className="hero_right relative md:flex-1">
        <Image
          height="500"
          width="600"
          className="ml-auto"
          src="/assets/images/hero.png"
          alt="codegyaan empower your code - Deepak Verma"
        />
      </div>
    </div>
  );
};

export default HeroSection;
