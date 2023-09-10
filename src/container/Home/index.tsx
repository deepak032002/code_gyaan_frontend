"use client";
import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./Home.module.scss";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import NewsLetter from "@/components/NewsLetter";
import Container from "@/components/Container";
import { BlogPost } from "@/types";
import { useQuery } from "react-query";
import { getBlogs } from "@/services";

interface Posts {
  message: string;
  page: number;
  results: BlogPost[];
  totalItem: number;
  totalPage: number;
}

const Home = () => {
  const { isLoading, data } = useQuery<Posts>({
    queryKey: ["posts"],
    queryFn: getBlogs,
  });

  console.log(data, isLoading, "<--");

  return (
    <>
      <div className={classNames(styles.home_container, "bg-red-100")}>
        <div className="overflow-hidden relative">
          <div className="absolute z-[9] md:h-96 md:w-96 h-64 w-64 bottom-[-25%] right-[-10%] bg-[#0085ff3b] rounded-full"></div>
          <div className="absolute z-[9] md:h-96 md:w-96 h-64 w-64 top-[-25%] left-[-10%] bg-[#0085ff3b] rounded-full"></div>
          <div className="absolute brightness-50 z-[9] md:h-48 md:w-48 h-28 w-28 top-[0] right-[0] rounded-full">
            <Image fill src="/assets/images/dotvector.png" alt="dotvector" />
          </div>

          <div className="absolute z-[9] brightness-[.1] md:h-48 md:w-48 h-28 w-28 bottom-[0] rotate-180 left-[0] rounded-full">
            <Image fill src="/assets/images/dotvector.png" alt="dotvector" />
          </div>
          <Container className="relative z-10">
            <Header isNotHome={false} />
            <HeroSection />
          </Container>
        </div>
      </div>

      <Container className="blog_section mt-10">
        <h2 className="text-gray-800 text-center">Our Latest Artiles</h2>

        {isLoading ? (
          <>Loading...</>
        ) : (
          <div className="blog_container my-8 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center md:gap-8 gap-y-12">
            {data?.results.map((blog, index) => {
              return (
                <BlogCard blog={blog} key={index} className="col-span-1" />
              );
            })}
          </div>
        )}
      </Container>
      <NewsLetter />
    </>
  );
};

export default Home;
