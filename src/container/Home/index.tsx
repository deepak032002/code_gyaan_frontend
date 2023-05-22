"use client";
import React from "react";
import classNames from "classnames";
import styles from "./Home.module.scss";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import NewsLetter from "@/components/NewsLetter";

const Home = () => {
  return (
    <>
      <div className={classNames(styles.home_container, "bg-red-100")}>
        <div className="overflow-hidden relative md:px-20 px-10">
          <div className="absolute z-[9] md:h-96 md:w-96 h-64 w-64 bottom-[-25%] right-[-10%] bg-[#0085ff3b] rounded-full"></div>
          <div className="absolute z-[9] md:h-96 md:w-96 h-64 w-64 top-[-25%] left-[-10%] bg-[#0085ff3b] rounded-full"></div>
          <div className="absolute brightness-50 z-[9] md:h-48 md:w-48 h-28 w-28 top-[0] right-[0] rounded-full">
            <Image fill src="/assets/images/dotvector.png" alt="dotvector" />
          </div>

          <div className="absolute z-[9] brightness-[.1] md:h-48 md:w-48 h-28 w-28 bottom-[0] rotate-180 left-[0] rounded-full">
            <Image fill src="/assets/images/dotvector.png" alt="dotvector" />
          </div>
          <div className="relative z-10">
            <Header isNotHome={false} />
            <HeroSection />
          </div>
        </div>
      </div>

      <div className="blog_section mt-10">
        <h2 className="text-gray-800 text-center">Our Latest Artiles</h2>
        <div className="blog_container my-8 grid grid-cols-12 md:gap-8 gap-y-12 md:px-20 sm:px-10 px-2">
          <BlogCard className="md:col-span-4 col-span-12" />
          <BlogCard className="md:col-span-4 col-span-12" />
          <BlogCard className="md:col-span-4 col-span-12" />
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default Home;
