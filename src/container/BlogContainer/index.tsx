import React, { useEffect } from "react";
import BlogCard from "@/components/BlogCard";

const BlogContainer = () => {
  return (
    <>
      <h2 className="text-center text-gray-800">Our Articles</h2>
      <div
        id="blog_container"
        className="blog_container relative mt-8 px-8 grid grid-cols-12 gap-x-4"
      >
        {Array.from({ length: 10 }).map((item, i) => {
          return (
            <BlogCard className="md:col-span-3 col-span-12" key={i} />
          );
        })}
      </div>
    </>
  );
};

export default BlogContainer;
