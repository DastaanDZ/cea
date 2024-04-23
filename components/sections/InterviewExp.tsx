"use client";

import React, { useEffect } from "react";
import { InterviewCard } from "../interviewCard";
import styles from "./interviewExp.module.css";
import { datas } from "@/data/interviewExpData";
import { Heading } from "../Heading";
import { SubHeading } from "../SubHeading";
import { Header } from "../Header";
import { DownArrowButton } from "../DownArrowButton";
import axios from "axios";
import { InterviewExp } from "@prisma/client";
import Link from "next/link";
import { useInterviewStore } from "@/app/store/interviews";
import { Loader } from "../assests/Loader";

export const InterviewExperience = () => {
  const { twoInterviews, addInterviews } = useInterviewStore();

  useEffect(() => {
    if (twoInterviews.length == 0) {
      addInterviews();
      console.log("ADDED INTERVIEWS USEEFFECT");
    }
  }, []);

  return (
    <>
      <div className={styles.maindiv}>
        <Header headingText="INTERVIEW." subHeadingText="EXPERIENCES." />
        <div className={styles.seperator}></div>
        <div className={styles.cardholder}>
          {twoInterviews.length === 0 ? (
            <Loader />
          ) : (
            twoInterviews.map((data: InterviewExp) => (
              <Link href={`/interviews/${data.id}`} key={data.id}>
                <InterviewCard key={data.id} {...data} />
              </Link>
            ))
          )}
        </div>
        <DownArrowButton text="Load More" redirectLink="/interviews" />
      </div>
    </>
  );
};
