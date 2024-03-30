"use client";

import React, { useEffect } from "react";
import { PageTopHeading } from "@/components/PageTopHeading";
import styles from "./developers.module.css";
import { Loader } from "@/components/assests/Loader";
import { DevCard } from "@/components/DevCard";
import { developers } from "@/data/developers";

export default function InterviewExpPage() {
  return (
    <>
      <PageTopHeading
        mainHeading="MEET OUR."
        heading="DEVELOPERS."
        subHeading="TEAM."
      />
      <div className={styles.cardContainer}>
        {developers.map((developer) => (
          <DevCard developer={developer} key={developer.id} />
        ))}
      </div>
    </>
  );
}
