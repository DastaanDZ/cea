"use client";

import React, { useEffect } from "react";
import styles from "@/app/(routes)/activity/activity.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import { Activity } from "@prisma/client";
import { ActivityCard } from "@/components/ActivityCard";
import Link from "next/link";
import { useActivityStore } from "@/app/store/activity";
import { Loader } from "@/components/assests/Loader";

export default function ActivityPage() {
  const { activities, addActivities } = useActivityStore();

  useEffect(() => {
    if (activities.length === 0) {
      addActivities();
      console.log("ADDED ACTIVITIES");
    }
  }, []);

  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="F I N D ."
        heading="OUR OFFERINGS."
        subHeading="EVENTS. WORKSHOPS."
      />
      <div className={styles.imageContainer}>
        <img src="/prithvi.png" className={styles.image} alt="event_img" />
        <p>
          Build your expertise with our immersive workshops and dynamic events,
          shaping the future of civil engineering excellence together.
        </p>
      </div>

      <div className={styles.cardContainer}>
        {activities.length === 0 ? (
          <Loader />
        ) : (
          activities.map((activity: Activity) => (
            <Link href={`/activity/${activity.id}`} key={activity.id}>
              <ActivityCard key={activity.id} {...activity} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
