import Home from "@/container/Home";
import { getBlogs } from "@/services";
import React from "react";

export const metadata = {
  title: "Code Gyaan - Home",
  description:
    "Welcome to Code Gyaan, your ultimate destination for coding and programming tutorials.",
};

const Page = async () => {
  const res = await getBlogs();
  return <Home posts={res} />;
};

export default Page;
