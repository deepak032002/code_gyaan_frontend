import React from "react";
import styles from "./hero.module.scss";
import classNames from "classnames";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className={classNames(
        "mx-auto flex md:flex-row flex-col-reverse justify-center items-center min-h-[70vh] md:min-h-[90vh]",
        styles.hero_container
      )}
    >
      <div className={classNames(styles.hero_left, "md:flex-1")}>
        <div className={classNames(styles.blog_name, "font-[Righteous]")}>
          Code <span className="text-[#e31d27]">Gyaan</span>
        </div>

        <div className={styles.tagline}>
          <p>
            Welcome to Code Gyaan, your ultimate destination for coding and
            programming tutorials.
          </p>
        </div>

        <div className="contact_btn">
          <button className="btn">Contact Us</button>
        </div>
      </div>
      <div className="hero_right relative md:flex-1">
        <Image
          height="500"
          width="600"
          src="/assets/images/hero.png"
          alt="hero_image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
