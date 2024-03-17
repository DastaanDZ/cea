"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "../app/(routes)/compExam/[compExamId]/compExam.module.css";

export const OfficialWebsite: React.FC<any> = ({link}) => {
  const router = useRouter();
    console.log("link ",link);
  const handleButtonClick = () => {
    router.push(link);
  };

  return (
    <div className={styles.materialTitle} onClick={handleButtonClick}>
      Official Website
    </div>
  );
};
