"use client";

import { useState, useEffect } from "react";
import { Activity, ActivityLink } from "@prisma/client";
import styles from "./activityContent.module.css";

interface ActivityContentProps {
  activity: Activity | null;
  link: ActivityLink[] | null;
}

export const ActivityContent: React.FC<ActivityContentProps> = ({
  activity,
  link,
}) => {
  const [isPastDeadline, setIsPastDeadline] = useState(false);

  useEffect(() => {
    if (activity && activity.deadline) {
      const deadlineTimestamp = new Date(activity.deadline).getTime();
      const currentTimestamp = new Date().getTime();
      setIsPastDeadline(currentTimestamp > deadlineTimestamp);
    }
  }, [activity]);

  return (
    <>
      <div className={styles.aboutMain}>
        <h1 className={styles.mobileAbout}>ABOUT</h1>
        <div className={styles.imgContentWrapper}>
          {link && <img src={link[0].link} className={styles.img} alt="" />}
          <div className={styles.aboutDiv}>
            <h1>ABOUT</h1>
            <p>{activity?.desc}</p>
            <input className={styles.expand_btn} type="checkbox" />
            <div className={styles.buttonDiv}>
              {/* <Link> 
              </Link> */}
              <button className={styles.button} disabled={isPastDeadline}>
                {isPastDeadline ? "Deadline Passed" : "Register Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
