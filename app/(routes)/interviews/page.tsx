"use client";

import React, { useEffect } from "react";
import styles from "@/components/sections/interviewExp.module.css";
import axios from "axios";
import { InterviewExp } from "@prisma/client";
import { DownArrowButton } from "@/components/DownArrowButton";
import { InterviewCard } from "@/components/interviewCard";
import { Header } from "@/components/Header";
import Image from "next/image";
import arrow from "@/public/Arrow 1.png";
import { RightArrowButton } from "@/components/RightArrowButton";
import { PageTopHeading } from "@/components/PageTopHeading";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useInterviewStore } from "@/app/store/interviews";
import { Loader } from "@/components/assests/Loader";

export default function InterviewExpPage() {
  const { interviews, addInterviews } = useInterviewStore();

  useEffect(() => {
    if (interviews.length == 0) {
      addInterviews();
      console.log("ADDED INTERVIEWS");
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.maindiv}>
          <PageTopHeading
            mainHeading="Get to Know about different competitive Examination and Learn."
            heading="RESOURCES."
            subHeading="MATERIALS."
          />

          <div className={styles.buttonsDiv}>
            <a href="/form" className={styles.mainDiv}>
              <div className={styles.buttonDiv}>
                Share Your Own Experience
                <div className={styles.arrowDiv}>
                  <Image src={arrow} alt="" className={styles.arrowButton} />
                </div>
              </div>
              <div className={styles.colorDiv}></div>
            </a>
          </div>

          <div className={styles.cardholder}>
            {interviews.length === 0 ? (
              <Loader />
            ) : (
              interviews.map((data: InterviewExp) => (
                <Link href={`/interviews/${data.id}`} key={data.id}>
                  <InterviewCard key={data.id} {...data} />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
