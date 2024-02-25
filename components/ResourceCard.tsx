"use client";

import React from "react";
import styles from "./resourceCard.module.css";
import Image from "next/image";
import school from "../public/school.svg";
import { RightArrowButton } from "./RightArrowButton";
import { useInView } from "react-intersection-observer";

interface ResourceCardProps {
  title: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ title }) => {
  const { ref, inView, entry } = useInView();

  return (
    <>
      <div
        ref={ref}
        className={`${styles.borderDiv} ${inView ? styles.borderDivShow : ""}`}
      >
        <div className={styles.cards}>
          <div className={styles.cardHeading}>
            <Image
              src={school}
              alt=""
              style={{ width: "46.75px", height: "38.25px" }}
            />
            <h2>Competitive.</h2>
            <h3>/Exam</h3>
          </div>
          <div className={styles.cardMainHeading}>
            <h1>{title}</h1>
            <h2>MATERIALS</h2>
            <a href="/resources">Previous Year Papers</a>
          </div>
          <RightArrowButton
            text="Show More"
            redirectLink="/resources"
            textDec="none"
          />
        </div>
      </div>
    </>
  );
};
