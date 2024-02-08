"use client";

import React, { useEffect, useState } from "react";
import styles from "./resource.module.css";
import { Card } from "@/components/Card";
import { SearchBar } from "./../../../components/SearchBar";
import { PageTopHeading } from "@/components/PageTopHeading";
import { BigButton } from "@/components/BigButton";
import Link from "next/link";
import { useInterviewStore } from "@/app/store/interviews";
import { useResourceStore } from "@/app/store/resources";
import { Resources } from "@prisma/client";
import { Loader } from "@/components/assests/Loader";

export default function ResourcesPage() {
  const { resources, addResources } = useResourceStore();
  const [displayResource, setDisplayResource] = useState(resources);

  useEffect(() => {
    if (resources.length == 0) {
      addResources();
      console.log("ADDED RESOURCES");
    }
  }, []);

  return (
    <div className={styles.container}>
      <PageTopHeading
        mainHeading="Get to Know about different competitive Examination and Learn."
        heading="RESOURCES."
        subHeading="MATERIALS."
      />
      <div className={styles.selection}>
        <div className={styles.bigButtons}>
          <BigButton name="Core Materials" />
          <BigButton name="IT/CS Materials" />
        </div>
        <SearchBar
        // data={resources}
        // onChange={(displayData: any) => setDisplayResource(displayData)}
        />
      </div>
      <div className={styles.cardContainer}>
        {resources.length === 0 ? (
          <Loader />
        ) : (
          resources.map((resource) => (
            <Link
              href={`/resources/${resource.id}`}
              key={resource.id}
              style={{ width: "100%" }}
            >
              <Card {...resource} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
