"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/(routes)/faculty/faculty.module.css";
import { PageTopHeading } from "@/components/PageTopHeading";
import { FacultyCard } from "@/components/FacultyCard";
import { SearchBar } from "@/components/SearchBar";
import { useResourceStore } from "@/app/store/resources";
import { faculties } from "@/data/faculties";

export default function FacultyPage() {
  const { resources, addResources } = useResourceStore();
  const [displayResource, setDisplayResource] = useState(resources);

  useEffect(() => {
    if (resources.length === 0) {
      addResources();
      console.log("ADDED RESOURCES");
    }
  }, []);

  useEffect(() => {
    setDisplayResource(resources);
    console.log("AFTER SETTING DISPAY RESOURCES", displayResource.length);
  }, [resources]);
  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examinations and Learn."
        heading="PROFESSORS."
        subHeading="MATERIALS."
      />
      <SearchBar
        data={resources}
        onChange={(displayData: any) => setDisplayResource(displayData)}
      />

      <div className={styles.cardContainer}>
        {faculties.map((faculty) => (
          <FacultyCard faculty={faculty} key={faculty.id} />
        ))}
      </div>
    </div>
  );
}
