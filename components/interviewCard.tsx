"use client";

import React, { useEffect, useState } from "react";
import styles from "./interviewCard.module.css";
import icon from "../public/Frame 55.svg";
import Image from "next/image";
import profilePic from "../public/bg.jpg";
import { InterviewExp } from "@prisma/client";
import { IoStar } from "react-icons/io5";
import { useInterviewStore } from "@/app/store/interviews";

import { useInView } from "react-intersection-observer";

export const InterviewCard: React.FC<any> = (data) => {
  const { ref, inView, entry } = useInView();

  const [para, setPara] = useState("");

  useEffect(() => {
    if (data.desc.length > 20) {
      setPara(data.desc.slice(0, 500 - 3) + "...");
    } else {
      setPara(data.desc);
    }
  }, [data.desc]);

  const starsArray = Array.from({ length: data.rating }, (_, index) => (
    <IoStar key={index} style={{ marginRight: "0.3rem" }} size={15} />
  ));

  console.log(data);

  return (
    <>
      <div
        ref={ref}
        className={`${styles.cardDiv} ${inView ? styles.cardDivShow : ""}`}
      >
        <div className={styles.profilePic}>
          <img src={data.link[0].link} alt="" />
        </div>
        <div className={styles.cardPrimary}>
          <div className={styles.cardImg}>
            <img src={data.link[1].link} alt="" />
            <p>{data.company}</p>
          </div>
          <h1>Interview Experience</h1>

          <h3>{starsArray}</h3>
          <p>{para}</p>
        </div>
        <div className={styles.cardfooter}>
          <h4>{data.name}</h4>
          <p>{data.rollno}</p>
        </div>
      </div>
    </>
  );
};
