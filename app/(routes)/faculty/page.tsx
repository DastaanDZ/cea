"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/(routes)/faculty/faculty.module.css";
import { PageTopHeading } from "@/components/PageTopHeading";
import { FacultyCard } from "@/components/FacultyCard";
import { faculties } from "@/data/faculties";
import { SearchBar } from "./SearchBar";

export default function FacultyPage() {
  const [displayResource, setDisplayResource] = useState(faculties);

  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examinations and Learn."
        heading="PROFESSORS."
        subHeading="MATERIALS."
      />
      <SearchBar
        data={faculties}
        onChange={(displayData: any) => setDisplayResource(displayData)}
      />

      <div className={styles.cardContainer}>
        {displayResource.map((faculty) => (
          <FacultyCard faculty={faculty} key={faculty.id} />
        ))}
      </div>
    </div>
  );
}
