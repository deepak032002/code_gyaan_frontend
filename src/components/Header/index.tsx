"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { HiOutlineCodeBracket, HiBars2 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import SearchModal from "../SearchModal";

type HeaderProps = {
  isNotHome?: boolean;
};

const Header = ({ isNotHome }: HeaderProps) => {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShowTextWhite, setisShowTextWhite] = useState(false);
  const path = usePathname();
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(`.${styles.header_container}`);
      if (header) {
        if (window.scrollY > 0) {
          setisShowTextWhite(true);
          header.classList.add(styles.header_shadow, "md:px-20", "px-10");
        } else {
          setisShowTextWhite(false);
          header.classList.remove(styles.header_shadow, "md:px-20", "px-10");
        }
      }
    });
  }, []);

  if (isNotHome && !(path !== "/")) return <></>;

  return (
    <div className={classNames(styles.header_container)}>
      <div
        className={classNames("mx-auto flex justify-between py-4 px-8", {
          "text-white": !isNotHome || isShowTextWhite,
        })}
      >
        <div
          className={classNames(
            styles.mobile_nav,
            "md:hidden fixed top-0 w-full h-screen z-20",
            { "left-0": isShowMobileNav },
            { "-left-full": !isShowMobileNav }
          )}
        >
          <ul className="flex text-white flex-col py-8 items-center bg-blue-800 h-full w-full gap-10">
            <li>
              <div
                className="w-10 h-10 rounded-full bg-gray-500 text-black flex items-center justify-center cursor-pointer"
                onClick={() => setIsShowMobileNav(false)}
              >
                <RxCross1 />
              </div>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            {/* <li>
              <Link href="/tutorials">Tutorials</Link>
            </li> */}
            <li>
              <button className="btn">Login</button>
            </li>
          </ul>
        </div>
        <Link href="/" className="h-left font-[Righteous] text-2xl select-none">
          <div className="flex items-center gap-2 justify-center">
            Code <HiOutlineCodeBracket /> Gyaan
          </div>
          <p className="text-xs font-[Jost] tracking-[4px]">
            Empower Your Code
          </p>
        </Link>
        <div className="h-center md:flex hidden justify-center items-center">
          <ul className="flex gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            {/* <li>
              <Link href="/tutorials">Tutorials</Link>
            </li> */}
          </ul>
        </div>
        <div className="h-right flex items-center justify-center gap-4">
          <BiSearch className="text-xl" onClick={handleOpen} />
          <button className="btn md:block hidden">Login</button>
          <HiBars2
            className="text-xl md:hidden cursor-pointer"
            onClick={() => setIsShowMobileNav(true)}
          />
        </div>
      </div>
      <SearchModal handleOpen={handleOpen} open={isOpen} />
    </div>
  );
};

export default Header;
