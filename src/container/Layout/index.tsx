"use client";
import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Header from "@/components/Header";
interface props {
  children: ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="min-w-full bg-no-repeat bg-cover min-h-screen">
      {/* {router.route !== "/" && <Header isNotHome={true} />} */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
