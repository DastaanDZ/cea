"use client";

import React, { useEffect, useState } from "react";

import styles from "./navbar.module.css";
import { ColouredText } from "./ColouredText";
import { ColourdButton } from "./ColourdButton";
import { MenuBtn } from "./MenuBtn";
import Image from "next/image";
import arrow from "../public/Arrow 1.png";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={styles.hidden}></div>
      <div className={styles.navDiv}>
        <Link href={"/"}>
          {/* <h1 className={styles.colorText}>CEA.</h1> */}
          <img src="/cea.png" height="28px" />
        </Link>
        <div className={styles.navMenu}>
          <div className={styles.navlinks}>
            <a href="/">Home.</a>
            <a href="/activity">Activities.</a>
            <a href="/resources">Resources.</a>
            <a href="/interviews">Interviews</a>
            <a href="/compExam">CompExams.</a>
          </div>
          <UserButton afterSignOutUrl="/" />
          <a href="" className={styles.mainDiv}>
            {/* <div className={styles.buttonDiv}>
              Sign In
              <div className={styles.arrowDiv}>
                <Image src={arrow} alt="" className={styles.arrowButton} />
              </div>
            </div> */}
            {/* <div className={styles.colorDiv}></div> */}
          </a>
          <div className={styles.menuBack}>
            <button
              className={`${styles.hamburger}  ${
                isActive ? styles.isActive : ""
              }`}
              onClick={toggleMenu}
            >
              <div className={styles.bar}></div>
            </button>
          </div>
        </div>
        <div
          className={`${styles.mobileNav} ${isActive ? styles.isActive : ""}`}
          onClick={toggleMenu}
        >
          <a href="/">Home.</a>
          <a href="/activity">Activity.</a>
          <a href="/resources">Resources.</a>
          <a href="/interviews">Interviews</a>
          <a href="/compExam">CompExam.</a>
        </div>
      </div>
    </>
  );
};
