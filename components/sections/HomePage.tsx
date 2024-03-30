"use client";

import React from "react";
import styles from "./homePage.module.css";
import Image from "next/image";
import backgroundImg from "@/public/backgroundImg.png";
import man from "@/public/man.svg";
import scope from "@/public/scope.png";
import books from "@/public/books.png";
import earth from "@/public/earth.png";
import { Heading } from "@/components/Heading";
import { ColouredText } from "@/components/ColouredText";
import { ColourdButton } from "../ColourdButton";
import { RightArrowButton } from "../RightArrowButton";
import { CubeCanvas } from "../CubeCanvas";
import arrow from "@/public/Arrow 1.png";

export const HomePage = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight, // Scroll down by 100vh
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };
  return (
    <>
      <div className={styles.pageDiv}>
        <div className={styles.cubes}>
          <div className={styles.topCubes}>
            <div className={styles.cubeDiv}>
              <CubeCanvas img={man} />
            </div>
            <div className={styles.cubeDiv}>
              <CubeCanvas img={scope} />
            </div>
          </div>
          <div className={styles.bottomCubes}>
            <div className={styles.cubeDiv}>
              <CubeCanvas img={books} />
            </div>
            <div className={styles.cubeDiv}>
              <CubeCanvas img={earth} />
            </div>
          </div>
        </div>
        <div className={styles.backgroundImg}>
          <div className={styles.gridBackground}></div>
        </div>
        <div className={styles.wrapperDiv}>
          <div className={styles.headingDiv}>
            <h1>CIVIL</h1>
            <h2>ENGINEERING</h2>
          </div>
          <h1 className={styles.colorText}>ASSOCIATION</h1>
          <p>
            We will cook some powerful as well as potential resources for the
            aspiring Civil Engineering Student
          </p>
          <div className={styles.buttonsDiv}>
            <div className={styles.mainDiv} onClick={scrollDown}>
              <div className={styles.buttonDiv}>
                Let’s Get Started
                <div className={styles.arrowDiv}>
                  <Image src={arrow} alt="" className={styles.arrowButton} />
                </div>
              </div>
              <div className={styles.colorDiv}></div>
            </div>
            <RightArrowButton
              text="Explore Teams"
              redirectLink="/developers"
              textDec="underline"
            />
          </div>
        </div>
      </div>
    </>
  );
};
