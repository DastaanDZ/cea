"use client";

import React, { useEffect } from "react";
import styles from "./ourExperience.module.css";
import { OurExperienceCard } from "../OurExperienceCard";
import { DownArrowButton } from "../DownArrowButton";
import { ColouredText } from "../ColouredText";
import { Header } from "../Header";
import axios from "axios";
import { useActivityStore } from "@/app/store/activity";
import { Activity } from "@prisma/client";
import Link from "next/link";
import { Loader } from "../assests/Loader";

export const OurExperience = () => {
  const { twoActivities, addActivities } = useActivityStore();

  useEffect(() => {
    if (twoActivities.length == 0) {
      addActivities();
      console.log("ADDED OUREXPERIENCE");
    }
  }, []);

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.topDiv}>
          <div className={styles.headingContainer}>
            <h1 className={styles.colorText}>DISCOVER</h1>
            <h1 className={styles.colorText}>OUR</h1>
            <h1 className={styles.colorText}>OFFERINGS</h1>
          </div>
          <div className={styles.headingContainer}>
            <h2 className={styles.kind}>EVENTS.</h2>
            <h2 className={styles.kind}>WORKSHOPS.</h2>
            <h2 className={styles.kind}>LECTURES.</h2>
          </div>
        </div>
        <div className={styles.cardMainDiv}>
          {twoActivities.length === 0 ? (
            <Loader />
          ) : (
            twoActivities.map((data: Activity) => (
              <Link href={`/activity/${data.id}`} key={data.id}>
                <OurExperienceCard key={data.id} {...data} />
              </Link>
            ))
          )}
        </div>
        <DownArrowButton text="Load More" redirectLink="/activity" />
      </div>
    </>
  );
};
