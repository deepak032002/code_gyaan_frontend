"use client";

import { Avatar } from "@material-tailwind/react";
import classNames from "classnames";
import { AiOutlineCalendar } from "react-icons/ai";
import styles from "./blog.module.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {
  className: string;
};

const BlogCard = ({ className }: Props) => {
  return (
    <Link
      href={"/blog/what-is-the-difference-between-ux-and-ui-design"}
      className={classNames(
        className,
        "bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5",
        styles.blog_container
      )}
    >
      <div>
        <Image
          className={classNames("rounded-t-lg", styles.banner)}
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt="blog"
          width={500}
          height={500}
        />
      </div>
      <div className="p-5">
        <div>
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            Noteworthy technology acquisitions 2021
          </h5>
        </div>
        <p className="font-normal text-gray-700 mb-3">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>

        <hr />

        <div className="card-footer flex items-center justify-between mt-5">
          <Avatar
            src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="avatar"
            className="w-10 h-10"
            variant="circular"
          />

          <div className="date text-sm text-gray-700">
            <AiOutlineCalendar className="inline mr-2" />
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
